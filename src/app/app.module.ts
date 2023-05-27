import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { FormioGrid } from '@formio/angular/grid';
import { AppConfig } from './config';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrismService } from './prism.service';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { FormioResources } from '@formio/angular/resource';
@NgModule({
  declarations: [AppComponent, BuilderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormioModule,
    FormioGrid,
    RouterModule.forRoot([
      {
        path: '',
        component: BuilderComponent,
      },
    ]),
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormioResources,
    { provide: FormioAppConfig, useValue: AppConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
