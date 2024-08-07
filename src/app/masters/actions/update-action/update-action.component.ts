import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-action',
    templateUrl: './update-action.component.html',
    styleUrl: './update-action.component.css'
})
export class UpdateActionComponent implements OnInit {
    constructor(private fb: FormBuilder) { }

    createActionForm!: FormGroup;

    ngOnInit(): void {
        this.createActionForm = this.fb.group({
            name: ["", Validators.required],
            followUpDays: [""],
            type: [""],
            note: [""]
        })
    }

    onSubmit() {
        console.log(this.createActionForm.value);
    }
}
