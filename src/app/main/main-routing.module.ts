import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateWizardBuilderJsonComponent } from './create-wizard-builder-json/create-wizard-builder-json.component';
import { WizardBuilderComponent } from './wizard-builder/wizard-builder.component';

const routes: Routes = [
  {path:"wb",component:WizardBuilderComponent},
  {path:"wbj",component:CreateWizardBuilderJsonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
