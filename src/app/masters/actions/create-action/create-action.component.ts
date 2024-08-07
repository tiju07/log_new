import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-action',
    templateUrl: './create-action.component.html',
    styleUrl: './create-action.component.css'
})
export class CreateActionComponent implements OnInit {
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
