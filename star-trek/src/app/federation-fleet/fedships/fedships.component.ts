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
      info: '',
      id: 'ncc1701'
    },
    {
      name: 'USS Enterprise',
      registry: 'NCC-1701-D',
      class: 'Galaxy',
      type: 'Starship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/1701d.jpg',
      info: '',
      id: '1701d'
    },{
      name: 'USS Defiant',
      registry: 'NX-74205',
      class: 'Defiant',
      type: 'Starship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/ncc1701.jpg',
      info: '',
      id: 'defiant'
    },{
      name: 'USS Voyager',
      registry: 'NCC-74656',
      class: 'Intrepid',
      type: 'Starship',
      owner: 'United Federation of Planets',
      photo: '/assets/images/federation/voyager.jpg',
      info: '',
      id: 'voyager'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
