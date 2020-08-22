// import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

// @Component({
//   selector: 'app-klingonships',
//   templateUrl: './klingonships.component.html',
//   styleUrls: ['./klingonships.component.css']
// })
@Injectable({
  providedIn: 'root'
})

export class KshipsService {

  kships = [
    {
      name: 'IKS Bortas',
      class: 'Vor\'cha',
      type: 'Attack Cruiser',
      owner: 'Klingon Empire',
      photo: '/assets/images/klingon/bortas.jpg',
      info: '',
      id: '0'
    },
    {
      name: 'Cha\'Joh',
      class: 'D12',
      type: 'Bird of Prey',
      owner: 'Lursa and B\'Etor Duras',
      photo: '/assets/images/klingon/chajoh.jpg',
      info: '',
      id: '1'
    },
    {
      name: 'IKS Hegh\'ta',
      class: '',
      type: '',
      owner: '',
      photo: '/assets/images/klingon/heghta.jpg',
      info: '',
      id: '2'
    },
    {
      name: 'IKS Pagh',
      class: '',
      type: '',
      owner: '',
      photo: '/assets/images/klingon/pagh.jpg',
      info: '',
      id: '3'
    },
    {
      name: 'IKS Rotarran',
      class: '',
      type: '',
      owner: '',
      photo: '/assets/images/klingon/rotarran.jpg',
      info: '',
      id: '4'
    }
  ]

  constructor() { }

  // ngOnInit():void {}

  getShips(){
    return this.kships;
  }

}
