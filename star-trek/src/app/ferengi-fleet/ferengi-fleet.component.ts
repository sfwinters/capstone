import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferengi-fleet',
  templateUrl: './ferengi-fleet.component.html',
  styleUrls: ['./ferengi-fleet.component.css']
})
export class FerengiFleetComponent implements OnInit {
  ferengi = [
    {
      name: 'FMS Braktel',
      class: '',
      type: '',
      owner: '',
      photo: '',
      info: '',
      id: ''
    },
    {
      name: 'FMS Krayton',
      class: 'D\'Kora',
      type: 'Transport',
      owner: 'Ferengi Alliance',
      photo: '',
      info: '',
      id: 'krayton'
    },
    {
      name: 'Quark\'s Treasure',
      class: 'Large Shuttle',
      type: 'Shuttlepod',
      owner: 'Quark',
      photo: '',
      info: '',
      id: 'quark'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
