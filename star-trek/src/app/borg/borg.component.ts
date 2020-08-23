import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borg',
  templateUrl: './borg.component.html',
  styleUrls: ['./borg.component.css']
})
export class BorgComponent implements OnInit {
  borg = [
    {
      name: 'Borg Cube',
      class: '',
      type: '',
      owner: '',
      photo: '',
      info: '',
      id: ''
    },
    {
      name: 'Borg Sphere',
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
