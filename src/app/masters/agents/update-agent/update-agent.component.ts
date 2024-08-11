import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrl: './update-agent.component.css'
})
export class UpdateAgentComponent implements OnInit {
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
    locations!: [];
    accounts!: [];
    currencies!: [];
    visibilities!: [];
    segments!: [];
    salesmen!: [];
    customerServices!: [];


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

        this.createAgentForm_AgentAccounts = this.fb.group({
            location: [""],
            account: [""],
            currency: [""],
            visibility: [""],
            note: [""]
        });

        this.createAgentForm_AgentSegmentDetails = this.fb.group({
            location: [""],
            segment: [""],
            salesman: [""],
            customerService: [""],
            creditLimitDays: [""],
            creditLimitAmount: [""],
            publishedCreditDays: [""],
            contactPerson: [""],
            agentEmail: [""],
            operationalEmail: [""]
        })

        this.createAgentForm_AgentBankDetails = this.fb.group({
            currency: [""],
            accountNumber: [""],
            accountName: [""],
            bankName: [""],
            ibanNumber: [""],
            bankSwiftNumber: [""],
            bankAddress: [""],
            bankGuaranteeAccountNumber: [""],
        })

        this.createAgentForm_AgentVATDetails = this.fb.group({
            vatNumber: [""],
            vatExempted: [""],
            exemptedReason: [""],
        })

        this.createAgentForm_AgentOthers = this.fb.group({
            transhipmentEmail: [""],
            agentEDIReference: [""],
            agentEDIReferenceEmail: [""],
            accountOperatingPerson: [""],
            statusExportEmail: [""],
            statusImportEmail: [""],
            knownShipper: [""],
            escalationEmail: [""],
        })

        this.createAgentForm_AgentReference = this.fb.group({
            referenceCode: [""],
            referenceNumber: [""],
            note: [""],
        })

        this.createAgentForm_AgentEDIReceiverDetails = this.fb.group({
            receiverID: [""],
            receiverType: [""],
        })

        this.createAgentForm_AgentTaxDetails = this.fb.group({
            country: [""],
            taxId: [""],
            taxCode: [""],
            note: [""],
        })

        this.createAgentForm_AgentAgreement = this.fb.group({
            agreementCountry: [""],
            agentGroup: [""],
            agreementDate: [""],
            expiryDate: [""],
            fileURL: [""],
            fileName: [""],
            signedBy: [""],
        })
    }
    activeIndex = 0;

    increment() {
        if (this.activeIndex < 10) {
            this.activeIndex++;
        }
    }
    decrement() {
        if (this.activeIndex > 0) {
            this.activeIndex--;
        }
    }

    onSubmit() {
        // console.log(this.createAgentForm.value);
    }
}
