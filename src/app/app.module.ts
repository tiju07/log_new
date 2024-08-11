import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InplaceModule } from 'primeng/inplace';
import { ContextMenuModule } from 'primeng/contextmenu';
import { StepperModule } from 'primeng/stepper';
import { TabViewModule } from 'primeng/tabview';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        CreateCarrierRateComponent,
        UpdateCarrierRateComponent,
        ViewAllCarrierRatesComponent,
        ViewSingleCarrierRateComponent,
        CreateActionComponent,
        UpdateActionComponent,
        ViewAllActionsComponent,
        CreateAgentComponent,
        UpdateAgentComponent,
        ViewAllAgentsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        SidebarModule,
        RippleModule,
        AvatarModule,
        StyleClassModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
        FloatLabelModule,
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        BreadcrumbModule,
        TableModule,
        MultiSelectModule,
        InplaceModule,
        ContextMenuModule,
        StepperModule,
        TabViewModule
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
