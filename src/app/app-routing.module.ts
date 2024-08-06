import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarrierRateComponent } from './carrier-rates/create-carrier-rate/create-carrier-rate.component';
import { UpdateCarrierRateComponent } from './carrier-rates/update-carrier-rate/update-carrier-rate.component';
import { ViewAllCarrierRatesComponent } from './carrier-rates/view-all-carrier-rates/view-all-carrier-rates.component';
import { ViewSingleCarrierRateComponent } from './carrier-rates/view-single-carrier-rate/view-single-carrier-rate.component';

const routes: Routes = [
    { path: 'carrier-rates', component: ViewAllCarrierRatesComponent },
    { path: 'carrier-rates/create', component: CreateCarrierRateComponent },
    { path: 'carrier-rates/update/:id', component: UpdateCarrierRateComponent },
    { path: 'carrier-rates/view/:id', component: ViewSingleCarrierRateComponent },
    { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
