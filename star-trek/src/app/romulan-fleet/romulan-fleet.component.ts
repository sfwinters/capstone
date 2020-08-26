import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romulan-fleet',
  templateUrl: './romulan-fleet.component.html',
  styleUrls: ['./romulan-fleet.component.css']
})
export class RomulanFleetComponent implements OnInit {
  romulan = [
    {
      name: 'n/a',
      class: 'Shuttle',
      type: 'Shuttle',
      owner: 'Romulan Empire',
      photo: '/assets/images/romulan/dera.jpg',
      info: 'Though not a named ship, this shuttle played a pivotal point in the Dominion War. In 2374, both the Dominion and the Federation were attempting to court the Romulan Empire to join their side in the war. The shuttle was used by Romulan Senator Vreelak for separate meetings with both Dominion and Federation officials. Desperate for help, Ben Sisko presented the Senator with forged evidence of a supposed Dominion conspiracy against the Romulans. Vreenak discovered the deception and immediately left in a fury; however, his shuttle exploded shortly after leaving Deep Space Nine, caused by a bomb planted by a Cardassian agent. The Romulan intelligence agency the Tal Shiar believed that the attack was an act of Dominion aggression, convincing them to ally with the Federation in the war. Though Captain Sisko participated in the evidence forgery and later found out the truth about the assassination, he ultimately decided that deception was a "small price to pay for the safety of the Alpha Quadrant" and kept the information secret.',
      id: 'vreenak'
    },
    {
      name: 'Devoras',
      class: 'D\'deridex',
      type: 'Warbird',
      owner: 'Romulan Empire (Tal Shiar)',
      photo: '/assets/images/romulan/devoras.jpg',
      info: 'The Devoras was a Romulan military ship most notably used in an aborted mission to obtain Federation intelligence from the USS Enterprise. A Romulan intelligence agent, posing as a Vulcan Ambassador on her way to a peace negotiation in Romulan space, came aboard the Enterprise for transport. While there, she unsuccessfully tried to obtain information about the shield\'s defenses. When she was delivered to the Devoras, still posing as a Vulcan, the Romulans staged a transporter accident, leading the Enterprise to believe that she had been killed. The Enterprise crew discovered the deception soon afterward, but the Devoras was able to successfully evade capture.',
      id: 'devoras'
    },
    {
      name: 'IRW Khazara',
      class: 'D\'deridex',
      type: 'Warbird',
      owner: 'Romulan Empire',
      photo: '/assets/images/romulan/khazara.jpg',
      info: 'The Romulan ship Khazara was used in a Federation plot created by Ambassador Spock as a way of allowing three Romulan officials to defect to the Federation. Posing as a Romulan Major, the Enterprise-D\'s counselor Deanna Troi went aboard the Khazara with a "shipment of cargo" concealing the three defectors. While onboard, Troi was able to discover that the crew of the Khazara did not intend on completing the delivery. She was able to gain command of the ship and contacted the Enterprise, pretending to coordinate a sneak attack. When the Enterprise lowered its shields at her request, she and the three officials concealed in the cargo were able to be safely transported onboard moments before the Khazara\'s commanding officer regained control of the ship.',
      id: 'khazara'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
