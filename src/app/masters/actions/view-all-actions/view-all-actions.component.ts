import { Component, OnInit } from '@angular/core';
import { Column } from '../../../interfaces/column';
import { Action } from '../../../interfaces/action';
import { ActionsService } from '../../../services/actions.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-view-all-actions',
    templateUrl: './view-all-actions.component.html',
    styleUrl: './view-all-actions.component.css'
})
export class ViewAllActionsComponent implements OnInit {
    actions: Action[] = [];
    columns: Column[] = [];
    _selectedColumns: Column[] = [];
    selectedActions: Action | undefined;
    items!: MenuItem[];
    constructor(private actionsService: ActionsService) {
    }

    ngOnInit(): void {
        this.items = [
            { label: 'Update', icon: 'pi pi-fw pi-search', command: () => console.log("Viewing") },
            { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => console.log("Deleting") }
        ];
        this.actions = this.actionsService.getAllActions();
        this.columns = [
            { field: "actionId", header: "Action ID" },
            { field: "name", header: "Name" },
            { field: "followUpDays", header: "Follow Up Days" },
            { field: "type", header: "Type" },
            { field: "note", header: "Note" }
        ]
        this._selectedColumns = [
            { field: "actionId", header: "Action ID" },
            { field: "name", header: "Name" },
            { field: "followUpDays", header: "Follow Up Days" },
            { field: "type", header: "Type" },
            { field: "note", header: "Note" }
        ];
    }

    get selectedColumns(): Column[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: Column[]) {
        this._selectedColumns = this.columns.filter((col) => val.includes(col));
    }

}

