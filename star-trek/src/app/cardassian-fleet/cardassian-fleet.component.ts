import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardassian-fleet',
  templateUrl: './cardassian-fleet.component.html',
  styleUrls: ['./cardassian-fleet.component.css']
})
export class CardassianFleetComponent implements OnInit {
  cardassian = [{
    name: '',
    class: '',
    type: '',
    owner: '',
    photo: '',
    info: '',
    id: ''
  },
  {
    name: '',
    class: '',
    type: '',
    owner: '',
    photo: '',
    info: '',
    id: ''
  },
  {
    name: '',
    class: '',
    type: '',
    owner: '',
    photo: '',
    info: '',
    id: ''
  },
  {
    name: '',
    class: '',
    type: '',
    owner: '',
    photo: '',
    info: '',
    id: ''
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
