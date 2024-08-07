import { Component, OnInit } from '@angular/core';
import { CarrierRatesService } from '../../../services/carrier-rates.service';
import { CarrierRate } from '../../../interfaces/carrier-rate';

@Component({
    selector: 'app-view-single-carrier-rate',
    templateUrl: './view-single-carrier-rate.component.html',
    styleUrl: './view-single-carrier-rate.component.css'
})
export class ViewSingleCarrierRateComponent implements OnInit {
    constructor(private carrierRatesService: CarrierRatesService) { }
    data!: CarrierRate;
    ngOnInit() {
        this.data = this.carrierRatesService.getCarrierRate(0);
    }
}
