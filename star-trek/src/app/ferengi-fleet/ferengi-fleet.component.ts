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
      class: 'D\'Kora',
      type: 'Marauder',
      owner: 'Ferengi Alliance',
      photo: '/assets/images/ferengi/braktel.jpg',
      info: 'The Braktel was a Ferengi marauder captained by DaiMon Bok of the Ferengi Alliance. Bok blamed Jean-Luc Picard for the death of his son in a confrontation with the USS Stargazer, a Federation ship that at the time was commanded by Picard. Bok led the Braktel on two missions to attempt to get revenge on Picard, but both were ultimately unsuccessful. Bok was eventually turned in to Ferengi authorities by his own crew',
      id: 'braktel'
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
