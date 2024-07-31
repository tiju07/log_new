import { Component, ViewChild } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { Sidebar } from 'primeng/sidebar';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    constructor(private utils: UtilsService) {
        utils.sidebarVisible.subscribe((res) => { this.sidebarVisible = res });
    }

    @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;

    toggleSidebar() {
        this.utils.sidebarVisible.next(false);
    }
}
