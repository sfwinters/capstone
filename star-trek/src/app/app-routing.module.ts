import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefiantComponent } from './federation-fleet/defiant/defiant.component';
import { FederationFleetComponent } from './federation-fleet/federation-fleet.component';
import { KlingonFleetComponent } from './klingon-fleet/klingon-fleet.component';
import { RomulanFleetComponent } from './romulan-fleet/romulan-fleet.component';
import { CardassianFleetComponent } from './cardassian-fleet/cardassian-fleet.component';
import { FerengiFleetComponent } from './ferengi-fleet/ferengi-fleet.component';
import { BorgComponent } from './borg/borg.component';
import { LandingComponent } from './landing/landing.component'

const routes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: 'defiant', component: DefiantComponent },
  { path: 'federation', component: FederationFleetComponent },
  { path: 'klingon', component: KlingonFleetComponent },
  { path: 'romulan', component: RomulanFleetComponent },
  { path: 'cardassian', component: CardassianFleetComponent },
  { path: 'ferengi', component: FerengiFleetComponent },
  { path: 'borg', component: BorgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
