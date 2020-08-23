import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romulan-fleet',
  templateUrl: './romulan-fleet.component.html',
  styleUrls: ['./romulan-fleet.component.css']
})
export class RomulanFleetComponent implements OnInit {
  romulan = [
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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
