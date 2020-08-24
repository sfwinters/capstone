import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romulan-fleet',
  templateUrl: './romulan-fleet.component.html',
  styleUrls: ['./romulan-fleet.component.css']
})
export class RomulanFleetComponent implements OnInit {
  romulan = [
    {
      name: 'Belak',
      class: 'D\'deridex',
      type: 'Warbird',
      owner: 'Romulan Empire (Tal Shiar)',
      photo: '',
      info: '',
      id: 'belak'
    },
    {
      name: 'D\'era',
      class: 'Shuttle',
      type: 'Shuttle',
      owner: 'Romulan Empire',
      photo: '',
      info: '',
      id: 'dera'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
