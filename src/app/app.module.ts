import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AngularLibModule } from 'lib-angular';
// import { AngularLibModule } from 'AngularLibModule';
// import { AngularLibModule } from 'lib-angular/angular-lib';
// import { AngularLibModule } from 'lib-angular/projects/angular-lib/src/public-api';
// import { AngularLibModule } from 'lib-angular/projects/angular-lib/src/lib/angular-lib.module';

import { AngularLibModule, CircleProgressModule } from 'lib-angular/dist/angular-lib';
// import { AngularLibComponent } from 'lib-angular/dist/angular-lib';
// import { AngularLibComponent } from 'lib-angular/projects/angular-lib/src/public-api';

import { TestLibComponent } from './test-lib/test-lib.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TestLibComponent,
    DashboardComponent,
    // AngularLibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularLibModule,
    CircleProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [TestLibComponent]
})
export class AppModule { }
