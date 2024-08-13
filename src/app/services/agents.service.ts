import { Injectable } from '@angular/core';
import { Agent } from '../interfaces/agent';

@Injectable({
    providedIn: 'root'
})
export class AgentsService {
    constructor() { }

    agents: Agent[] = [
        {
            name: "Agent 1",
            country: "USA",
            group: "Group 1",
            address: "123 Main St",
            buyerConsolidationName: "Consolidation 1",
            ourOffice: "Office 1",
            profitShare: "10",
            incomeTaxPAN: "123456789",
            billingSubledger: "Subledger 1",
            visibility: "true",
            termCode: "Term 1",
            agentType: "Type 1",
            note: "Note 1",
            agreement: "Agreement 1",
            wca: "WCA 1",
            wcanumber: "WCANumber 1"
        },
        {
            name: "Agent 2",
            country: "Canada",
            group: "Group 2",
            address: "456 Elm St",
            buyerConsolidationName: "Consolidation 2",
            ourOffice: "Office 2",
            profitShare: "20",
            incomeTaxPAN: "987654321",
            billingSubledger: "Subledger 2",
            visibility: "false",
            termCode: "Term 2",
            agentType: "Type 2",
            note: "Note 2",
            agreement: "Agreement 2",
            wca: "WCA 2",
            wcanumber: "WCANumber 2"
        },
        {
            name: "Agent 3",
            country: "UK",
            group: "Group 3",
            address: "789 Oak Ave",
            buyerConsolidationName: "Consolidation 3",
            ourOffice: "Office 3",
            profitShare: "30",
            incomeTaxPAN: "789456123",
            billingSubledger: "Subledger 3",
            visibility: "true",
            termCode: "Term 3",
            agentType: "Type 3",
            note: "Note 3",
            agreement: "Agreement 3",
            wca: "WCA 3",
            wcanumber: "WCANumber 3"
        },
        {
            name: "Agent 4",
            country: "France",
            group: "Group 4",
            address: "321 Maple St",
            buyerConsolidationName: "Consolidation 4",
            ourOffice: "Office 4",
            profitShare: "40",
            incomeTaxPAN: "456789012",
            billingSubledger: "Subledger 4",
            visibility: "false",
            termCode: "Term 4",
            agentType: "Type 4",
            note: "Note 4",
            agreement: "Agreement 4",
            wca: "WCA 4",
            wcanumber: "WCANumber 4"
        },
        {
            name: "Agent 5",
            country: "Germany",
            group: "Group 5",
            address: "654 Pine Ave",
            buyerConsolidationName: "Consolidation 5",
            ourOffice: "Office 5",
            profitShare: "50",
            incomeTaxPAN: "234567890",
            billingSubledger: "Subledger 5",
            visibility: "true",
            termCode: "Term 5",
            agentType: "Type 5",
            note: "Note 5",
            agreement: "Agreement 5",
            wca: "WCA 5",
            wcanumber: "WCANumber 5"
        },
        {
            name: "Agent 6",
            country: "Italy",
            group: "Group 6",
            address: "987 Oak St",
            buyerConsolidationName: "Consolidation 6",
            ourOffice: "Office 6",
            profitShare: "60",
            incomeTaxPAN: "123456789",
            billingSubledger: "Subledger 6",
            visibility: "false",
            termCode: "Term 6",
            agentType: "Type 6",
            note: "Note 6",
            agreement: "Agreement 6",
            wca: "WCA 6",
            wcanumber: "WCANumber 6"
        },
        {
            name: "Agent 7",
            country: "Spain",
            group: "Group 7",
            address: "567 Elm St",
            buyerConsolidationName: "Consolidation 7",
            ourOffice: "Office 7",
            profitShare: "70",
            incomeTaxPAN: "987654321",
            billingSubledger: "Subledger 7",
            visibility: "true",
            termCode: "Term 7",
            agentType: "Type 7",
            note: "Note 7",
            agreement: "Agreement 7",
            wca: "WCA 7",
            wcanumber: "WCANumber 7"
        },
        {
            name: "Agent 8",
            country: "Australia",
            group: "Group 8",
            address: "890 Maple St",
            buyerConsolidationName: "Consolidation 8",
            ourOffice: "Office 8",
            profitShare: "80",
            incomeTaxPAN: "789456123",
            billingSubledger: "Subledger 8",
            visibility: "false",
            termCode: "Term 8",
            agentType: "Type 8",
            note: "Note 8",
            agreement: "Agreement 8",
            wca: "WCA 8",
            wcanumber: "WCANumber 8"
        },
        {
            name: "Agent 9",
            country: "Japan",
            group: "Group 9",
            address: "345 Pine Ave",
            buyerConsolidationName: "Consolidation 9",
            ourOffice: "Office 9",
            profitShare: "90",
            incomeTaxPAN: "456789012",
            billingSubledger: "Subledger 9",
            visibility: "true",
            termCode: "Term 9",
            agentType: "Type 9",
            note: "Note 9",
            agreement: "Agreement 9",
            wca: "WCA 9",
            wcanumber: "WCANumber 9"
        },
        {
            name: "Agent 10",
            country: "China",
            group: "Group 10",
            address: "678 Oak St",
            buyerConsolidationName: "Consolidation 10",
            ourOffice: "Office 10",
            profitShare: "100",
            incomeTaxPAN: "234567890",
            billingSubledger: "Subledger 10",
            visibility: "false",
            termCode: "Term 10",
            agentType: "Type 10",
            note: "Note 10",
            agreement: "Agreement 10",
            wca: "WCA 10",
            wcanumber: "WCANumber 10"
        }
    ];

    getAllAgents(): Agent[] {
        return this.agents;
    }

    getAgent(): Agent {
        return this.agents[0];
    }
}
