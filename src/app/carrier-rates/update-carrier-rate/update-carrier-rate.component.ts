import { Component } from '@angular/core';
import { selectFieldValidator } from '../create-carrier-rate/create-carrier-rate.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update-carrier-rate',
    templateUrl: './update-carrier-rate.component.html',
    styleUrl: './update-carrier-rate.component.css'
})
export class UpdateCarrierRateComponent {
    id: number | undefined;
    myForm!: FormGroup;
    carriers = ["Carrier1", "Carrier2", "Carrier3"];
    charges = ["Charge1", "Charge2", "Charge3"];
    currencies = ["USD", "EUR", "GBP"];
    constructor(private fb: FormBuilder, private route: ActivatedRoute) { }
    ngOnInit(): void {
        this.myForm = this.fb.group({
            data: ["Data"],
            carrier: ["", [Validators.required, selectFieldValidator()]],
            charge: ["", [Validators.required, selectFieldValidator()]],
            currency: ["", [Validators.required, selectFieldValidator()]],
            unit: [""],
            measurementType: [""],
            origin: [""],
            destination: [""],
            fdcSector: [""],
            firstEffectiveFrom: [""],
            fefdAmount: ["", Validators.min(4)],
            fefdMinimumAmount: [""],
            secondEffectiveFrom: [""],
            sefdAmount: [""],
            sefdMinimumAmount: [""],
        });
        this.id = this.route.snapshot.params['id'];
    }
    onSubmit(): void {
        // console.log(this.myForm.value); 
        console.log(this.myForm.errors);
    }
}
