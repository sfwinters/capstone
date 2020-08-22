import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise1',
  templateUrl: './enterprise1.component.html',
  styleUrls: ['./enterprise1.component.css']
})
export class Enterprise1Component implements OnInit {

  tosCrew = [
    {
      name: 'James T. Kirk',
      rank: 'Captain',
      position: 'Commanding Officer',
      race: 'Human',
      photo: '/assets/images/1701/kirk.jpg',
      bio: '',
      id: 'kirk'
    },
    {
      name: 'Spock',
      rank: '',
      position: '',
      race: 'Vulcan/Human',
      photo: '/assets/images/1701/spock.jpg',
      bio: '',
      id: 'spock'
    },
    {
      name: 'Dr. Leonard "Bones" McCoy',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/1701/bones.jpg',
      bio: '',
      id: 'bones'
    },
    {
      name: 'Montgomery Scott',
      rank: '',
      position: 'Chief Engineer',
      race: 'Human',
      photo: '/assets/images/1701/scotty.jpg',
      bio: '',
      id: 'scotty'
    },
    {
      name: 'Nyota Uhura',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/1701/uhura.jpg',
      bio: '',
      id: 'uhura'
    },
    {
      name: 'Pavel Chekov',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/1701/chekov.jpg',
      bio: '',
      id: 'chekov'
    },
    {
      name: 'Hikaru Sulu',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/1701/sulu.jpg',
      bio: '',
      id: 'sulu'
    },
    {
      name: 'Christine Chapel',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/1701/chapel.jpg',
      bio: '',
      id: 'chapel'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
