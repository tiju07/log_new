import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarrierRateComponent } from './carrier-rates/create-carrier-rate/create-carrier-rate.component';

const routes: Routes = [
    { path: 'carrier-rates/create', component: CreateCarrierRateComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
