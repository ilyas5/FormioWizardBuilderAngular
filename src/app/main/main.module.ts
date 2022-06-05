import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { FormioAuthConfig, FormioAuthService } from '@formio/angular/auth';
import { AppConfig } from 'src/environments/frmioConfig';
import { RouterModule } from '@angular/router';
import { WizardBuilderComponent } from './wizard-builder/wizard-builder.component';
import { CreateWizardBuilderJsonComponent } from './create-wizard-builder-json/create-wizard-builder-json.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [WizardBuilderComponent, CreateWizardBuilderJsonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    FormioModule,
  ],
  exports:[
    RouterModule,
    WizardBuilderComponent,
    CreateWizardBuilderJsonComponent
],
entryComponents:[
  WizardBuilderComponent
],
  providers:[
    {provide:FormioAppConfig , useValue:AppConfig},
    FormioAuthConfig,
    FormioAuthService
  ]
})
export class MainModule { }
