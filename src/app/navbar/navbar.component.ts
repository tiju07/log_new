import { Component } from '@angular/core';
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
}
