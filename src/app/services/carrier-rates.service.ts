import { Injectable } from '@angular/core';
import { CarrierRate } from '../interfaces/carrier-rate';
import { Carrier } from '../interfaces/carrier';

@Injectable({
    providedIn: 'root'
})
export class CarrierRatesService {

    constructor() { }
    carrierRates = [
        {
            carrierRateID: "1",
            carrier: {
                carrierID: "1",
                name: "test"
            },
            charge: {
                chargeID: "1",
                name: "test"
            },
            currency: {
                currencyID: "1",
                name: "test"
            },
            unit: "test",
            measurementType: "test",
            origin: "test",
            destination: "test",
            fDCSector: "test",
            firstEffectiveFromDate: new Date(),
            fEFD_Amount: 1,
            fEFD_MinimumAmount: 1,
            secondEffectiveFromDate: new Date(),
            sEFD_Amount: 1,
            sEFD_MinimumAmount: 1
        },
        ...Array.from({ length: 9 }, (_, i) => ({
            carrierRateID: `${i + 2}`,
            carrier: {
                carrierID: `${i + 2}`,
                name: `test ${i + 2}`
            },
            charge: {
                chargeID: `${i + 2}`,
                name: `test ${i + 2}`
            },
            currency: {
                currencyID: `${i + 2}`,
                name: `test ${i + 2}`
            },
            unit: `test ${i + 2}`,
            measurementType: `test ${i + 2}`,
            origin: `test ${i + 2}`,
            destination: `test ${i + 2}`,
            fDCSector: `test ${i + 2}`,
            firstEffectiveFromDate: new Date(Date.now() + i * 1000 * 60 * 60 * 24),
            fEFD_Amount: i + 2,
            fEFD_MinimumAmount: i + 2,
            secondEffectiveFromDate: new Date(Date.now() + i * 1000 * 60 * 60 * 24),
            sEFD_Amount: i + 2,
            sEFD_MinimumAmount: i + 2
        }))
    ]
    getAllCarrierRates(): CarrierRate[] {
        return this.carrierRates;
    }

    getCarrierRate(id: number): CarrierRate {
        return this.carrierRates[0];
    }
}
