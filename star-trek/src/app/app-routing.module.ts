import { NgModule, OnInit } from '@angular/core';
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
import { VoyagerComponent } from './federation-fleet/voyager/voyager.component';
import { FedshipsComponent } from './federation-fleet/fedships/fedships.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: LandingComponent},
  { path: 'federation', component: FederationFleetComponent,
    children: [
      { path: '', component: FedshipsComponent },
      { path: 'fed-fleet', component: FedshipsComponent },
      { path: 'defiant', component: DefiantComponent },
      { path: 'tos-ent', component: Enterprise1Component },
      { path: 'tng-ent', component: Enterprise2Component },
      { path: 'voyager', component: VoyagerComponent },
    ]},
  { path: 'klingon', component: KlingonFleetComponent },
  { path: 'romulan', component: RomulanFleetComponent },
  { path: 'cardassian', component: CardassianFleetComponent },
  { path: 'ferengi', component: FerengiFleetComponent },
  { path: 'borg', component: BorgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
