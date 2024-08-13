import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarrierRateComponent } from './masters/carrier-rates/create-carrier-rate/create-carrier-rate.component';
import { UpdateCarrierRateComponent } from './masters/carrier-rates/update-carrier-rate/update-carrier-rate.component';
import { ViewAllCarrierRatesComponent } from './masters/carrier-rates/view-all-carrier-rates/view-all-carrier-rates.component';
import { ViewSingleCarrierRateComponent } from './masters/carrier-rates/view-single-carrier-rate/view-single-carrier-rate.component';
import { CreateActionComponent } from './masters/actions/create-action/create-action.component';
import { UpdateActionComponent } from './masters/actions/update-action/update-action.component';
import { ViewAllActionsComponent } from './masters/actions/view-all-actions/view-all-actions.component';
import { CreateAgentComponent } from './masters/agents/create-agent/create-agent.component';
import { UpdateAgentComponent } from './masters/agents/update-agent/update-agent.component';
import { ViewAllAgentsComponent } from './masters/agents/view-all-agents/view-all-agents.component';
import { ViewSingleAgentComponent } from './masters/agents/view-single-agent/view-single-agent.component';

const routes: Routes = [
    { path: 'carrier-rates', component: ViewAllCarrierRatesComponent },
    { path: 'carrier-rates/view/:id', component: ViewSingleCarrierRateComponent },
    { path: 'carrier-rates/create', component: CreateCarrierRateComponent },
    { path: 'carrier-rates/update/:id', component: UpdateCarrierRateComponent },
    { path: 'actions', component: ViewAllActionsComponent },
    { path: 'actions/create', component: CreateActionComponent },
    { path: 'actions/update/:id', component: UpdateActionComponent },
    { path: 'agents', component: ViewAllAgentsComponent },
    { path: 'agents/view/:id', component: ViewSingleAgentComponent },
    { path: 'agents/create', component: CreateAgentComponent },
    { path: 'agents/update/:id', component: UpdateAgentComponent },
    { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
