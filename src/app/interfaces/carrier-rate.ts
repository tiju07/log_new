import { Carrier } from "./carrier";
import { Charge } from "./charge";
import { Currency } from "./currency";

export interface CarrierRate {
    carrierRateID: string;
    carrier: Carrier;
    charge: Charge;
    currency: Currency;
    unit: string;
    measurementType: string;
    origin: string;
    destination: string;
    fDCSector: string;
    firstEffectiveFromDate: Date;
    fEFD_Amount: number;
    fEFD_MinimumAmount: number;
    secondEffectiveFromDate: Date;
    sEFD_Amount: number;
    sEFD_MinimumAmount: number;
}
