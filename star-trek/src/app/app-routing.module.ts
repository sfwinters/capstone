import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefiantComponent } from './federation-fleet/defiant/defiant.component';
import { FederationFleetComponent } from './federation-fleet/federation-fleet.component';
import { KlingonFleetComponent } from './klingon-fleet/klingon-fleet.component';
import { RomulanFleetComponent } from './romulan-fleet/romulan-fleet.component';
import { CardassianFleetComponent } from './cardassian-fleet/cardassian-fleet.component';
import { FerengiFleetComponent } from './ferengi-fleet/ferengi-fleet.component';
import { BorgComponent } from './borg/borg.component';
import { LandingComponent } from './landing/landing.component';
import { Enterprise1Component } from './federation-fleet/enterprise1/enterprise1.component';
import { Enterprise2Component } from './federation-fleet/enterprise2/enterprise2.component';
import { VoyagerComponent } from './federation-fleet/voyager/voyager.component'
import { BortasComponent } from './klingon-fleet/bortas/bortas.component'
import { ChajohComponent } from './klingon-fleet/chajoh/chajoh.component'
import { HeghtaComponent } from './klingon-fleet/heghta/heghta.component'
import { PaghComponent } from './klingon-fleet/pagh/pagh.component'
import { RotarranComponent } from './klingon-fleet/rotarran/rotarran.component'

const routes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: 'defiant', component: DefiantComponent },
  { path: 'federation', component: FederationFleetComponent },
  { path: 'klingon', component: KlingonFleetComponent, 
    children: [
      { path: 'bortas', component: BortasComponent },
      { path: 'chajoh', component: ChajohComponent },
      { path: 'heghta', component: HeghtaComponent },
      { path: 'pagh', component: PaghComponent },
      { path: 'rotarran', component: RotarranComponent },
    ]},
  { path: 'romulan', component: RomulanFleetComponent },
  { path: 'cardassian', component: CardassianFleetComponent },
  { path: 'ferengi', component: FerengiFleetComponent },
  { path: 'borg', component: BorgComponent },
  { path: 'tos-ent', component: Enterprise1Component },
  { path: 'tng-ent', component: Enterprise2Component },
  { path: 'voyager', component: VoyagerComponent },
  // { path: 'bortas', component: BortasComponent },
  // { path: 'chajoh', component: ChajohComponent },
  // { path: 'heghta', component: HeghtaComponent },
  // { path: 'pagh', component: PaghComponent },
  // { path: 'rotarran', component: RotarranComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
