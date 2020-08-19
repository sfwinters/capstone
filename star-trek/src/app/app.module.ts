import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FederationFleetComponent } from './federation-fleet/federation-fleet.component';
import { KlingonFleetComponent } from './klingon-fleet/klingon-fleet.component';
import { RomulanFleetComponent } from './romulan-fleet/romulan-fleet.component';
import { CardassianFleetComponent } from './cardassian-fleet/cardassian-fleet.component';
import { BorgComponent } from './borg/borg.component';
import { Enterprise1Component } from './federation-fleet/enterprise1/enterprise1.component';
import { Enterprise2Component } from './federation-fleet/enterprise2/enterprise2.component';
import { DefiantComponent } from './federation-fleet/defiant/defiant.component';
import { PaghComponent } from './klingon-fleet/pagh/pagh.component';
import { ChajohComponent } from './klingon-fleet/chajoh/chajoh.component';
import { FerengiFleetComponent } from './ferengi-fleet/ferengi-fleet.component';
import { QuarksTreasureComponent } from './ferengi-fleet/quarks-treasure/quarks-treasure.component';
import { DeraComponent } from './romulan-fleet/dera/dera.component';
import { HeghtaComponent } from './klingon-fleet/heghta/heghta.component';
import { BortasComponent } from './klingon-fleet/bortas/bortas.component';
import { PrakeshComponent } from './cardassian-fleet/prakesh/prakesh.component';
import { KoranakComponent } from './cardassian-fleet/koranak/koranak.component';
import { VetarComponent } from './cardassian-fleet/vetar/vetar.component';
import { VoyagerComponent } from './federation-fleet/voyager/voyager.component';
import { SepuloComponent } from './ferengi-fleet/sepulo/sepulo.component';
import { KraxonComponent } from './cardassian-fleet/kraxon/kraxon.component';
import { BelakComponent } from './romulan-fleet/belak/belak.component';
import { RotarranComponent } from './klingon-fleet/rotarran/rotarran.component';
import { LandingComponent } from './landing/landing.component';

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
    PaghComponent,
    ChajohComponent,
    FerengiFleetComponent,
    QuarksTreasureComponent,
    DeraComponent,
    HeghtaComponent,
    BortasComponent,
    PrakeshComponent,
    KoranakComponent,
    VetarComponent,
    VoyagerComponent,
    SepuloComponent,
    KraxonComponent,
    BelakComponent,
    RotarranComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
