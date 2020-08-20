import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise2',
  templateUrl: './enterprise2.component.html',
  styleUrls: ['./enterprise2.component.css']
})
export class Enterprise2Component implements OnInit {

  tngCrew = [
    {
      name: 'Jean-Luc Picard',
      rank: 'Captain',
      position: 'Commanding Officer',
      race: 'Human',
      photo: '/assets/images/1701d/picard.jpg',
      bio: '',
      id: 'picard'
    },
    {
      name: 'William Riker',
      rank: 'Commander',
      position: 'First Officer',
      race: 'Human',
      photo: '',
      bio: '',
      id: 'riker'
    },
    {
      name: 'Data',
      rank: 'Lieutenant Commander',
      position: 'Science Officer',
      race: 'Android',
      photo: '',
      bio: '',
      id: 'data'
    },
    {
      name: 'Deanna Troi',
      rank: 'Lieutenant Commander',
      position: 'Ship\'s Counselor',
      race: 'Betazoid/Human',
      photo: '',
      bio: '',
      id: 'troi'
    },
    {
      name: 'Geordi LaForge',
      rank: 'Lieutenant Commander',
      position: 'Chief Engineer',
      race: 'Human',
      photo: '',
      bio: '',
      id: 'geordi'
    },
    {
      name: 'Worf',
      rank: 'Lieutenant',
      position: 'Chief Security Officer',
      race: 'Klingon',
      photo: '',
      bio: '',
      id: 'worf'
    },
    {
      name: 'Dr. Beverly Crusher',
      rank: 'Commander',
      position: 'Chief Medical Officer',
      race: 'Human',
      photo: '',
      bio: '',
      id: 'beverly'
    },
    {
      name: 'Tasha Yar',
      rank: 'Lieutenant',
      position: 'Chief Security Officer',
      race: 'Human',
      photo: '',
      bio: '',
      id: 'tasha'
    },
    {
      name: 'Miles O\'Brien',
      rank: 'Senior Chief Petty Officer',
      position: 'Transporter Chief',
      race: 'Human',
      photo: '',
      bio: '',
      id: 'obrien'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
