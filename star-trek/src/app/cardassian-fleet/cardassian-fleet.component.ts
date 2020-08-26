import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardassian-fleet',
  templateUrl: './cardassian-fleet.component.html',
  styleUrls: ['./cardassian-fleet.component.css']
})
export class CardassianFleetComponent implements OnInit {
  cardassian = [
  {
    name: 'CDS Kraxon',
    class: 'Galor',
    type: 'Battlecruiser',
    owner: 'Cardassian Union',
    photo: '/assets/images/cardassian/kraxon.jpg',
    info: 'The Kraxon was best known for its use in Cardassia\'s cooperation with the Federation crew aboard Deep Space Nine while trying to eliminate a threat from a rebel organization called the Maquis. The Federation\'s USS Defiant was hijacked by Maquis members and the Kraxon was used to pursue and attempt to retrieve it. During this mission, both ships were attacked by two warships operated by the Obsidian Order, a Cardassian intelligence agency. The Kraxon successfully shielded the Defiant against the attack and brought Thomas Riker, a Maquis member, into custody.',
    id: 'kraxon'
  },
  {
    name: 'CDS Prakesh',
    class: 'Galor',
    type: 'Battlecruiser',
    owner: 'Cardassian Central Command',
    photo: '/assets/images/cardassian/prakesh.jpg',
    info: 'The Prakesh was used primarily as a patrol ship immediately following the Cardassian withdrawal from Bajor. It was captained by Cardassian official Gul Dukat, known among the Bajorans as one of the most notorious war criminals of that era. During the Klingon-Cardassian War, it was used in an attempt to evacuate government officials out of Cardassia. The ship was destroyed by Klingon Birds-of-Prey during the mission, but the passengers and crew successfully escaped with the aid of the USS Defiant.',
    id: 'prakesh'
  },
  {
    name: 'CDS Vetar',
    class: 'Galor',
    type: 'Cruiser',
    owner: 'Cardassian Central Command',
    photo: '/assets/images/cardassian/vetar.jpg',
    info: 'The CDS Vetar was primarily known for its engagements with the Maquis, considered terrorists by the Cardassian government. Like the USS Voyager, it was pursuing a Maquis ship when it was unexpectedly pulled into the Delta Quadrant by a being known as The Caretaker. Unlike Voyager and the Maquis ship, however, the Vetar was soon returned to the Alpha Quadrant. What happened immediately afterward is unknown, but the remains of the ship were later discovered in a region of space known as the Badlands.',
    id: 'vetar'
  },
  {
    name: 'Ravinok',
    class: 'Ravinok',
    type: 'Transport',
    owner: 'Cardassian Union',
    photo: '/assets/images/cardassian/ravinok.jpg',
    info: 'Two years prior to Cardassia\'s withdrawal from Deep Space Nine (known until that point as Terak Nor), the Ravinok was on a mission to transport Bajoran prisoners to a labor camp. The ship was attacked en route by privateers and crashed, causing its destruction. Six years later, a smuggler brought a piece of the ship to DS9, prompting a search and rescue mission. Among the discovered survivors was Tora Ziyal, the illegitimate daughter of Gul Dukat. Originally planning to kill her if she was found alive, Dukat instead took her back to Cardassia to live with him.',
    id: 'ravinok'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
