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
      info: 'The Braktel was a Ferengi marauder captained by DaiMon Bok of the Ferengi Alliance. Bok blamed Jean-Luc Picard for the death of his son in a confrontation with the USS Stargazer, a Federation ship that at the time was commanded by Picard. Bok led the Braktel on two missions to attempt to get revenge on Picard, but both were ultimately unsuccessful. Bok was eventually turned in to Ferengi authorities by his own crew.',
      id: 'braktel'
    },
    {
      name: 'FMS Krayton',
      class: 'D\'Kora',
      type: 'Transport',
      owner: 'Ferengi Alliance',
      photo: '/assets/images/ferengi/krayton.jpg',
      info: 'The FMS Krayton was a Ferengi Alliance marauder captained by a Ferengi called DaiMon Tog. In 2366, the Krayton represented its government at a trade conference on the planet Betazed. While there, Tog met and instantly became enamored with Lwaxana Troi, mother of Enterprise crew member Deanna Troi. Though Lwaxana did not share his affections and very publicly turned him down, that only encouraged him further. He attempted to surprise her while she was speaking to Deanna and Enterprise First Officer Will Riker, which ended in Tog abducting all three of them to the Krayton. Though nearly as fast as the Enterprise, the Krayton did not manage to get away and the three crew members were returned unharmed.',
      id: 'krayton'
    },
    {
      name: 'Quark\'s Treasure',
      class: 'Large Shuttle',
      type: 'Shuttlepod',
      owner: 'Quark',
      photo: '/assets/images/ferengi/quark.jpg',
      info: 'In the year 2372, Ferengi bar owner and entrepreneur Quark received a Ferengi shuttle from his cousin, as a way of repaying a previous loan. Quark named the shuttle "Quark\'s Treasure," and immediately attempted to use it on a smuggling mission accompanied by his brother, Rom, and nephew, Nog. They quickly discovered that Quark\'s cousin had sabotaged the shuttle and while trying to repair it, Rom inadvertently sent Quark\'s Treasure back in time to the year 1947, upon which it promptly crash-landed. Rom was fortunately able to undo his mistake and send the shuttle back to the correct location and time, with the help of Deep Space Nine\'s security chief (who had stowed away onboard, suspicious of Quark\'s activities). When they returned, it was determined that the shuttle was totaled and Quark was forced to sell it as salvage.',
      id: 'quark'
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
