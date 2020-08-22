import { Component, OnInit } from '@angular/core';
import { KshipsService } from '../kships.service';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-klingonships',
  templateUrl: './klingonships.component.html',
  styleUrls: ['./klingonships.component.css']
})

export class KlingonshipsComponent implements OnInit {

  // klingon = [
  //   {
  //     name: 'IKS Bortas',
  //     class: 'Vor\'cha',
  //     type: 'Attack Cruiser',
  //     owner: 'Klingon Empire',
  //     photo: '/assets/images/klingon/bortas.jpg',
  //     info: '',
  //     id: 'bortas'
  //   },
  //   {
  //     name: 'Cha\'Joh',
  //     class: 'D12',
  //     type: 'Bird of Prey',
  //     owner: 'Lursa and B\'Etor Duras',
  //     photo: '/assets/images/klingon/chajoh.jpg',
  //     info: '',
  //     id: 'chajoh'
  //   },
  //   {
  //     name: 'IKS Hegh\'ta',
  //     class: '',
  //     type: '',
  //     owner: '',
  //     photo: '/assets/images/klingon/heghta.jpg',
  //     info: '',
  //     id: 'heghta'
  //   },
  //   {
  //     name: '',
  //     class: '',
  //     type: '',
  //     owner: '',
  //     photo: '/assets/images/klingon/pagh.jpg',
  //     info: '',
  //     id: ''
  //   },
  //   {
  //     name: '',
  //     class: '',
  //     type: '',
  //     owner: '',
  //     photo: '/assets/images/klingon/rotarran.jpg',
  //     info: '',
  //     id: 'rotarran'
  //   }
  // ]

  constructor(private shipsList: KshipsService) { }
  

  ngOnInit():void {
    this.getShips()
  }
  kships;
  getShips() {
    this.kships = this.shipsList.getShips()
}

}
