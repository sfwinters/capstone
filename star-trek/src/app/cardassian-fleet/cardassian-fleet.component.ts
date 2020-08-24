import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardassian-fleet',
  templateUrl: './cardassian-fleet.component.html',
  styleUrls: ['./cardassian-fleet.component.css']
})
export class CardassianFleetComponent implements OnInit {
  cardassian = [{
    name: 'CDS Koranak',
    class: 'Keldon',
    type: 'Cruiser',
    owner: 'Obsidian Order',
    photo: '',
    info: '',
    id: 'koranak'
  },
  {
    name: 'CDS Kraxon',
    class: 'Galor',
    type: 'Battlecruiser',
    owner: 'Cardassian Union',
    photo: '',
    info: '',
    id: 'kraxon'
  },
  {
    name: 'CDS Prakesh',
    class: 'Galor',
    type: 'Battlecruiser',
    owner: 'Cardassian Central Command',
    photo: '',
    info: '',
    id: 'prakesh'
  },
  {
    name: 'CDS Vetar',
    class: 'Galor',
    type: 'Cruiser',
    owner: 'Cardassian Central Command',
    photo: '',
    info: '',
    id: 'vetar'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
