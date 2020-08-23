import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FederationFleetComponent } from './federation-fleet/federation-fleet.component';
import { Enterprise1Component } from './federation-fleet/enterprise1/enterprise1.component';
import { Enterprise2Component } from './federation-fleet/enterprise2/enterprise2.component';
import { DefiantComponent } from './federation-fleet/defiant/defiant.component';
import { VoyagerComponent } from './federation-fleet/voyager/voyager.component';
import { KlingonFleetComponent } from './klingon-fleet/klingon-fleet.component';
import { RomulanFleetComponent } from './romulan-fleet/romulan-fleet.component';
import { CardassianFleetComponent } from './cardassian-fleet/cardassian-fleet.component';
import { FerengiFleetComponent } from './ferengi-fleet/ferengi-fleet.component';
import { BorgComponent } from './borg/borg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FederationFleetComponent,
    KlingonFleetComponent,
    RomulanFleetComponent,
    CardassianFleetComponent,
    BorgComponent,
    Enterprise1Component,
    Enterprise2Component,
    DefiantComponent,
    FerengiFleetComponent,
    VoyagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule, { useHash: true },
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
