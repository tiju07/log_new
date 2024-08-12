import { Component, OnInit } from '@angular/core';
import { Column } from '../../../interfaces/column';
import { Agent } from '../../../interfaces/agent';
import { AgentsService } from '../../../services/agents.service';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-view-all-agents',
    templateUrl: './view-all-agents.component.html',
    styleUrl: './view-all-agents.component.css'
})
export class ViewAllAgentsComponent implements OnInit {
    agents: Agent[] = [];
    columns: Column[] = [];
    _selectedColumns: Column[] = [];
    selectedAgents: Agent | undefined;
    items!: MenuItem[];
    constructor(private agentsService: AgentsService) {
    }

    ngOnInit(): void {
        this.items = [
            { label: 'Update', icon: 'pi pi-fw pi-search', command: () => console.log("Viewing") },
            { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => console.log("Deleting") }
        ];
        this.agents = this.agentsService.getAllAgents();
        this.columns = [
            { field: "name", header: "Name" },
            { field: "country", header: "Country" },
            { field: "group", header: "Group" },
            { field: "address", header: "Address" },
            { field: "buyerConsolidationName", header: "Buyer Consolidation Name" },
            { field: "ourOffice", header: "Our Office" },
            { field: "profitShare", header: "Profit Share" },
            { field: "incomeTaxPAN", header: "Income Tax PAN" },
            { field: "billingSubledger", header: "Billing Subledger" },
            { field: "visibility", header: "Visibility" },
            { field: "termCode", header: "Term Code" },
            { field: "agentType", header: "Agent Type" },
            { field: "note", header: "Note" },
            { field: "agreement", header: "Agreement" },
            { field: "wca", header: "WCA" },
            { field: "wcanumber", header: "WCA Number" },
        ]
        this._selectedColumns = [
            { field: "name", header: "Name" },
            { field: "country", header: "Country" },
            { field: "agentType", header: "Agent Type" },
            { field: "agreement", header: "Agreement" },
            { field: "wca", header: "WCA" },
        ];
    }

    get selectedColumns(): Column[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: Column[]) {
        this._selectedColumns = this.columns.filter((col) => val.includes(col));
        // console.log("After: ", this.columns, val, this.columns.filter((col) => val.includes(col)));
        // this._selectedColumns = [];
        // this.columns.forEach((col) => {
        //     let bool = val.includes(col);
        //     if (val.includes(col)) {
        //         this._selectedColumns.push(col);
        //     }
        // })
    }

}


