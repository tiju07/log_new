import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-create-carrier",
  templateUrl: "./create-carrier.component.html",
  styleUrl: "./create-carrier.component.css",
})
export class CreateCarrierComponent {
  removeAddress(i: number) {
    const addresses = this.createCarrierForm_CarrierAddresses.get(
      "addresses"
    ) as FormArray;
    addresses.removeAt(i);
  }
  addAddress() {
    const address = this.fb.group({
      addressID: [""],
      carrierID: [""],
      location: [""],
      address: [""],
      countryID: [""],
      ediType: [""],
      win: [""],
      eAWB: [""],
      contact: [""],
      phone: [""],
      exportDetentionDays: [""],
      importDetentionDays: [""],
      fax: [""],
      email: [""],
      carrierAccountID: [""],
      carrierAgentAccount: [""],
      brokerage: [""],
      freightMinimumAmount: [""],
      ourAccountNumber: [""],
      spotNumber: [""],
      airWaybillAccountingNote: [""],
      paidToName: [""],
      note: [""],
    });
    const addresses = this.createCarrierForm_CarrierAddresses.get(
      "addresses"
    ) as FormArray;
    addresses.push(address);
  }

  countries = [];
  ediTypes = [];
  createCarrierForm_CarrierDetails = this.fb.group({
    carrierID: [""],
    carrierName: [""],
    carrierType: [""],
    type: [""],
    USCustomsSCAC: [""],
    carrierNumber: [""],
    SCAC: [""],
    IATACarrier: [""],
    EDILineCode: [""],
    PANNumber: [""],
  });
  createCarrierForm_CarrierAddresses = this.fb.group({
    addresses: this.fb.array([
      this.fb.group({
        addressID: [""],
        carrierID: [""],
        location: [""],
        address: [""],
        countryID: [""],
        ediType: [""],
        win: [""],
        eAWB: [""],
        contact: [""],
        phone: [""],
        exportDetentionDays: [""],
        importDetentionDays: [""],
        fax: [""],
        email: [""],
        carrierAccountID: [""],
        carrierAgentAccount: [""],
        brokerage: [""],
        freightMinimumAmount: [""],
        ourAccountNumber: [""],
        spotNumber: [""],
        airWaybillAccountingNote: [""],
        paidToName: [""],
        note: [""],
      }),
    ]),
  });

  addresses = (this.createCarrierForm_CarrierAddresses.get(
    "addresses"
  ) as FormArray).controls;

  constructor(private fb: FormBuilder) {}

  activeIndex = 0;

  increment() {
    if (this.activeIndex < 1) {
      this.activeIndex++;
    }
  }
  decrement() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
  onSubmit() {
    console.log(
      this.createCarrierForm_CarrierDetails?.value,
      this.createCarrierForm_CarrierAddresses?.value
    );
  }
}
