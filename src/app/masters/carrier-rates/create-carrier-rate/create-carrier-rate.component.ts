import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

@Component({
    selector: "app-create-carrier-rate",
    templateUrl: "./create-carrier-rate.component.html",
    styleUrl: "./create-carrier-rate.component.css"
})
export class CreateCarrierRateComponent {
    myForm!: FormGroup;
    carriers = ["Carrier1", "Carrier2", "Carrier3"];
    charges = ["Charge1", "Charge2", "Charge3"];
    currencies = ["USD", "EUR", "GBP"];
    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
        this.myForm = this.fb.group({
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
    }
    onSubmit(): void {
        // console.log(this.myForm.value); 
        console.log(this.myForm.errors);
    }
}

export function selectFieldValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.untouched && control.value === "") {
            return { invalidInput: true };
        }
        return null;
    };
}
