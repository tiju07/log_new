import { Component, OnInit } from '@angular/core';
import { CarrierRate } from '../../interfaces/carrier-rate';
import { CarrierRatesService } from '../../services/carrier-rates.service';
import { Column } from '../../interfaces/column';

@Component({
    selector: 'app-view-all-carrier-rates',
    templateUrl: './view-all-carrier-rates.component.html',
    styleUrl: './view-all-carrier-rates.component.css'
})
export class ViewAllCarrierRatesComponent implements OnInit {
    carrierRates: CarrierRate[] = [];
    columns: Column[] = [];
    _selectedColumns: Column[] = [];
    selectedProduct: CarrierRate | undefined;
    constructor(private carrierRatesService: CarrierRatesService) {
    }

    ngOnInit(): void {
        this.carrierRates = this.carrierRatesService.getAllCarrierRates();
        this.columns = [
            { field: 'carrierRateID', header: 'ID' },
            { field: 'carrier', header: 'Carrier' },
            { field: 'charge', header: 'Charge' },
            { field: 'currency', header: 'Currency' },
            { field: 'unit', header: 'Unit' },
            { field: 'measurementType', header: 'Measurement Type' },
            { field: 'origin', header: 'Origin' },
            { field: 'destination', header: 'Destination' },
            { field: 'fDCSector', header: 'FDC Sector' },
            { field: 'firstEffectiveFromDate', header: 'First Effective From' },
            { field: 'fEFD_Amount', header: 'First Effective From - Amount' },
            { field: 'fEFD_MinimumAmount', header: 'First Effective From - Minimum Amount' },
            { field: 'secondEffectiveFromDate', header: 'Second Effective From' },
            { field: 'sEFD_Amount', header: 'Second Effective From - Amount' },
            { field: 'sEFD_MinimumAmount', header: 'Second Effective From - Minimum Amount' },
        ]
        this._selectedColumns = [
            { field: 'carrierRateID', header: 'ID' },
            { field: 'carrier', header: 'Carrier' },
            { field: 'origin', header: 'Origin' },
            { field: 'destination', header: 'Destination' },
            { field: 'fDCSector', header: 'FDC Sector' },
            { field: 'firstEffectiveFromDate', header: 'First Effective From' },
            { field: 'secondEffectiveFromDate', header: 'Second Effective From' }
        ];
    }

    get selectedColumns(): Column[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: Column[]) {
        //restore original order
        this._selectedColumns = this.columns.filter((col) => val.includes(col));
    }

}
