import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fedships',
  templateUrl: './fedships.component.html',
  styleUrls: ['./fedships.component.css']
})
export class FedshipsComponent implements OnInit {
  fedShips = [
    {
      name: 'USS Enterprise',
      registry: 'NCC-1701',
      class: 'Constitution',
      type: 'Starship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/ncc1701.jpg',
      info: 'One of twelve ships of its type initially commissioned by the Federation, this would go on to become the most celebrated ship of its time. It earned most of its reputation from the famous five-year mission under the command of its third captain, James T. Kirk. The "original Enterprise," as it later came to be known, it accumulated forty years of service in Starfleet before its eventual destruction. Replacement and refitted ships would continue to bear the name Enterprise in future generations.',
      id: 'ncc1701'
    },
    {
      name: 'USS Enterprise',
      registry: 'NCC-1701-D',
      class: 'Galaxy',
      type: 'Starship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/1701d.jpg',
      info: 'The fifth Federation ship given the name Enterprise, this ship rivals only the original build in reputation and service. Its technology was greatly updated from previous versions, including a custom-designed warp propulsion system. It was widely known as the flagship of the Federation under the command of Jean-Luc Picard, amassing an impressive number of first contact species and tens of thousands of light-years traveled.',
      id: '1701d'
    },{
      name: 'USS Defiant',
      registry: 'NX-74205',
      class: 'Defiant',
      type: 'Escort Vessel/Warship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/defiant.jpg',
      info: 'Though this was the second Federation ship to bear the name Defiant, it was the first Defiant-class ship, designed specifically to combat the Borg. The prototype was initially shelved, but brought out of storage and assigned to the space station Deep Space Nine under the command of Benjamin Sisko. It became an important asset in multiple conflicts during this time, and even temporarily served as home to Federation officer Worf while he was stationed on Deep Space Nine. The ship played a key part in the Dominion War and, after its destruction in 2375, its replacement was renamed as Defiant in its honor.',
      id: 'defiant'
    },
    {
      name: 'USS Voyager',
      registry: 'NCC-74656',
      class: 'Intrepid',
      type: 'Starship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/voyager.jpg',
      info: 'At less than half the size of a Federation Galaxy-class starship from the same era, Intrepid-class ships were built for long-term exploration missions. Voyager became famous for inadvertently becoming the first ship to explore the Delta quadrant of space, after it was unexpectedly transported there during an attempted rescue mission. Over the next seven years, the ship managed to return from seventy-thousand light years away while entirely cut off from communcation with the Alpha Quadrant and with no access to Starfleet resources.',
      id: 'voyager'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
