import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defiant',
  templateUrl: './defiant.component.html',
  styleUrls: ['./defiant.component.css']
})
export class DefiantComponent implements OnInit {
  defCrew = [
    {
      name: 'Benjamin Lafayette Sisko',
      rank: 'Captain',
      position: 'Commanding Officer',
      race: 'Human',
      photo: '/assets/images/defiant/sisko.jpg',
      bio: 'test text here',
      id: 'sisko'
    },
    {
      name: 'Kira Nerys',
      rank: 'Commander',
      position: 'First Officer',
      race: 'Bajoran',
      photo: '',
      bio: '',
      id: 'kira'
    },
    {
      name: 'Jadzia Dax',
      rank: 'Lieutenant Commander',
      position: 'Science Officer',
      race: 'Trill',
      photo: '',
      bio: '',
      id: 'dax'
    },
    {
      name: 'Nog',
      rank: 'Lieutenant Junior Grade',
      position: 'Helmsman',
      race: 'Ferengi',
      photo: '',
      bio: '',
      id: 'nog'
    }
  ]
  show;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(li) {
    this.show = !this.show;
  }
}

