import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klingon-fleet',
  templateUrl: './klingon-fleet.component.html',
  styleUrls: ['./klingon-fleet.component.css']
})
export class KlingonFleetComponent implements OnInit {

  klingon = [
    {
      name: 'IKS Bortas',
      class: 'Vor\'cha',
      type: 'Attack Cruiser',
      owner: 'Klingon Empire',
      photo: '/assets/images/klingon/bortas.jpg',
      info: 'The IKS Bortas was a Klingon attack ship that played a prominent role in the Klingon Civil War. It served as the flagship for Gowron, a Klingon Chancellor fighting to keep his political office with the assistance of the Federation. The ship was named for the Klingon word meaning "revenge."',
      id: 'bortas'
    },
    {
      name: 'Cha\'Joh',
      class: 'D12',
      type: 'Bird of Prey',
      owner: 'Lursa and B\'Etor Duras',
      photo: '/assets/images/klingon/chajoh.jpg',
      info: 'The Cha\'Joh was a Bird of Prey owned and operated by Lursa and B\'Etor Duras, a pair of Klingon sisters who sparked the Klingon Civil War by publicly opposing Gowron\'s chancellorship and attempting to install their nephew Toral in his place. The sisters later used their ship in an attempt to sabotage a wormhole in Bajoran space, followed by involvement in an attack on a Federation colony.',
      id: 'chajoh'
    },
    {
      name: 'IKS Hegh\'ta',
      class: 'K\'vort',
      type: 'Bird of Prey',
      owner: 'Klingon Empire',
      photo: '/assets/images/klingon/heghta.jpg',
      info: 'The IKS Hegh\'ta is notable as one of the ships fighting for Gowron during the Klingon Civil War, particularly thwarting an attack on his ship, the IKS Bortas. Famed Klingon warrior Worf once acted as tactical officer on the ship.',
      id: 'heghta'
    },
    {
      name: 'IKS Pagh',
      class: 'K\'vort',
      type: 'Bird of Prey',
      owner: 'Klingon Defense Force',
      photo: '/assets/images/klingon/pagh.jpg',
      info: 'The IKS Pagh was the first Klingon ship to host a Starfleet officer, William T. Riker, as a crew member. During Riker\'s assignment onboard the Pagh, he was accused of sabotage when a bacteria was found eating away at the hull of the ship. Riker was unable to persuade the ship\'s captain that he was not involved, eventually assuming command of the ship in order to allow the Enterprise to remove the bacteria and repair the hull, saving the ship.',
      id: 'pagh'
    },
    {
      name: 'IKS Rotarran',
      class: 'B\'rel',
      type: 'Bird of Prey',
      owner: '',
      photo: '/assets/images/klingon/rotarran.jpg',
      info: 'The IKS Rotarran is notable for its service during the Dominion War. Initially suffering from multiple defeats and thought to be cursed, the ship was later assigned to Klingon General Martok, who was determined to restore its honor. Under Marton\'s command, the ship was able to fight off a Jem\'Hadar warship and rescue a Klingon crew from Cardassian territory, ultimately earning the ship a commendation from the Klingon High Council. The ship fought alongside the Federation ship the USS Defiant, where it played a large part in breaking through Dominion lines.',
      id: 'rotarran'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  
  }
  
  }


