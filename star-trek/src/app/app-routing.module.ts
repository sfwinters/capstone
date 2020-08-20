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
import { BorgCubeComponent } from './borg/borg-cube/borg-cube.component'
import { BorgSphereComponent } from './borg/borg-sphere/borg-sphere.component'
import { KoranakComponent } from './cardassian-fleet/koranak/koranak.component'
import { KraxonComponent } from './cardassian-fleet/kraxon/kraxon.component'
import { PrakeshComponent } from './cardassian-fleet/prakesh/prakesh.component'
import { VetarComponent } from './cardassian-fleet/vetar/vetar.component'
import { QuarksTreasureComponent } from './ferengi-fleet/quarks-treasure/quarks-treasure.component'
import { SepuloComponent } from './ferengi-fleet/sepulo/sepulo.component'
import { BelakComponent } from './romulan-fleet/belak/belak.component'
import { DeraComponent } from './romulan-fleet/dera/dera.component'

const routes: Routes = [
  { path: 'home', component: LandingComponent},
  { path: 'federation', component: FederationFleetComponent,
    children: [
      { path: 'defiant', component: DefiantComponent },
      { path: 'tos-ent', component: Enterprise1Component },
      { path: 'tng-ent', component: Enterprise2Component },
      { path: 'voyager', component: VoyagerComponent },
    ]},
  { path: 'klingon', component: KlingonFleetComponent, 
    children: [
      { path: 'bortas', component: BortasComponent },
      { path: 'chajoh', component: ChajohComponent },
      { path: 'heghta', component: HeghtaComponent },
      { path: 'pagh', component: PaghComponent },
      { path: 'rotarran', component: RotarranComponent },
    ]},
  { path: 'romulan', component: RomulanFleetComponent,
    children: [
      { path: 'belak', component: BelakComponent },
      { path: 'dera', component: DeraComponent },
    ] },
  { path: 'cardassian', component: CardassianFleetComponent,
      children: [
        { path: 'koranak', component: KoranakComponent },
        { path: 'kraxon', component: KraxonComponent }, 
        { path: 'prakesh', component: PrakeshComponent },
        { path: 'vetar', component: VetarComponent },
      ] },
  { path: 'ferengi', component: FerengiFleetComponent,
      children: [
        { path: 'quark', component: QuarksTreasureComponent },
        { path: 'sepulo', component: SepuloComponent }
      ] },
  { path: 'borg', component: BorgComponent,
      children: [
        { path: 'cube', component: BorgCubeComponent },
        { path: 'sphere', component: BorgSphereComponent }
      ] },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
