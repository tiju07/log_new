import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-agent',
    templateUrl: './create-agent.component.html',
    styleUrl: './create-agent.component.css'
})
export class CreateAgentComponent implements OnInit {
    constructor(private fb: FormBuilder) { }

    createAgentForm_AgentDetails!: FormGroup;
    createAgentForm_AgentAccounts!: FormGroup;
    createAgentForm_AgentSegmentDetails!: FormGroup;
    createAgentForm_AgentBankDetails!: FormGroup;
    createAgentForm_AgentCreditDetails!: FormGroup;
    createAgentForm_AgentVATDetails!: FormGroup;
    createAgentForm_AgentOthers!: FormGroup;
    createAgentForm_AgentEDIReceiverDetails!: FormGroup;
    createAgentForm_AgentReference!: FormGroup;
    createAgentForm_AgentAgreement!: FormGroup;
    createAgentForm_AgentTaxDetails!: FormGroup;

    countries!: [];
    groups!: [];
    agentTypes!: [];

    ngOnInit(): void {
        this.createAgentForm_AgentDetails = this.fb.group({
            name: ["", Validators.required],
            country: [""],
            group: [""],
            address: [""],
            buyerConsolidationName: [""],
            ourOffice: [""],
            profitShare: [""],
            incomeTaxPAN: [""],
            billingSubledger: [""],
            visibility: [""],
            termCode: [""],
            agentType: [""],
            note: [""],
            agreement: [""],
            wca: [""],
            wcanumber: [""],
        })
    }

    onSubmit() {
        // console.log(this.createAgentForm.value);
    }
}
