import { Component, HostListener } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    constructor(private utils: UtilsService) { }

    toggleSidebar() {
        this.utils.sidebarVisible.next(true);
        console.log('Changed!');
    }



    @HostListener('document:mouseover', ['$event'])
    onMouseOver(event: MouseEvent) {
        const targetElement = event.target as Element;
        if (targetElement.classList.contains("p-button")) {
            console.log("Clicked!");
            this.toggleSidebar();
        }
    }
}
