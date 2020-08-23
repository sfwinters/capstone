import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferengi-fleet',
  templateUrl: './ferengi-fleet.component.html',
  styleUrls: ['./ferengi-fleet.component.css']
})
export class FerengiFleetComponent implements OnInit {
  ferengi = [
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
