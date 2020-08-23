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
      info: '',
      id: 'bortas'
    },
    {
      name: 'Cha\'Joh',
      class: 'D12',
      type: 'Bird of Prey',
      owner: 'Lursa and B\'Etor Duras',
      photo: '/assets/images/klingon/chajoh.jpg',
      info: '',
      id: 'chajoh'
    },
    {
      name: 'IKS Hegh\'ta',
      class: 'K\'vort',
      type: 'Bird of Prey',
      owner: '',
      photo: '/assets/images/klingon/heghta.jpg',
      info: '',
      id: 'heghta'
    },
    {
      name: 'IKS Pagh',
      class: 'K\'vort',
      type: 'Bird of Prey',
      owner: '',
      photo: '/assets/images/klingon/pagh.jpg',
      info: '',
      id: ''
    },
    {
      name: 'IKS Rotarran',
      class: 'B\'rel',
      type: 'Bird of Prey',
      owner: '',
      photo: '/assets/images/klingon/rotarran.jpg',
      info: '',
      id: 'rotarran'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  
  }
  
  }


