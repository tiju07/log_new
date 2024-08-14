export interface CarrierAddress {
    addressID: number;
    carrierID: number;
    location?: string;
    address?: string;
    countryID?: number;
    ediType?: string;
    win?: string;
    eAWB?: string;
    contact?: string;
    phone?: string;
    exportDetentionDays?: number;
    importDetentionDays?: number;
    fax?: string;
    email?: string;
    carrierAccountID?: number;
    carrierAgentAccount?: string;
    brokerage?: string;
    freightMinimumAmount?: number;
    ourAccountNumber?: string;
    spotNumber?: string;
    airWaybillAccountingNote?: string;
    paidToName?: string;
    note?: string;
}
