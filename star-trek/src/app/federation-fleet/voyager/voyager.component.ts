import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voyager',
  templateUrl: './voyager.component.html',
  styleUrls: ['./voyager.component.css']
})
export class VoyagerComponent implements OnInit {
  voyCrew = [
    {
      name: 'Kathryn Janeway',
      rank: 'Captain',
      position: 'Commanding Officer',
      race: 'Human',
      photo: '/assets/images/voyager/janeway.jpg',
      bio: '',
      id: 'janeway'
    },
    {
      name: 'Chakotay',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/voyager/chakotay.jpg',
      bio: '',
      id: 'chakotay'
    },
    {
      name: 'Tuvok',
      rank: '',
      position: '',
      race: 'Vulcan',
      photo: '/assets/images/voyager/tuvok.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'Tom Paris',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/voyager/paris.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'B\'Elanna Torres',
      rank: '',
      position: '',
      race: 'Klingon/Human',
      photo: '/assets/images/voyager/torres.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'Seven of Nine',
      rank: '',
      position: '',
      race: 'Human',
      photo: '/assets/images/voyager/sevenofnine.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'The Doctor',
      rank: '',
      position: '',
      race: 'Hologram',
      photo: '/assets/images/voyager/doctor.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'Harry Kim',
      rank: 'Ensign',
      position: '',
      race: 'Human',
      photo: '/assets/images/voyager/kim.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'Neelix',
      rank: '',
      position: '',
      race: '',
      photo: '/assets/images/voyager/neelix.jpg',
      bio: '',
      id: ''
    },
    {
      name: 'Kes',
      rank: '',
      position: '',
      race: '',
      photo: '/assets/images/voyager/kes.jpg',
      bio: '',
      id: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
