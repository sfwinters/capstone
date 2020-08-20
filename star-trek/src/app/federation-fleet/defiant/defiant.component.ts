import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defiant',
  templateUrl: './defiant.component.html',
  styleUrls: ['./defiant.component.css']
})
export class DefiantComponent implements OnInit {
  defCrew = [
    {
      name: 'Ben Sisko',
      rank: 'Captain',
      position: 'Commanding Officer',
      race: 'Human',
      photo: '/assets/images/defiant/sisko.jpg',
      bio: `Benjamin Lafayette Sisko was born in 2332 in New Orleans, Louisiana and raised by his father, Joseph Sisko. He entered Starfleet Academy at the age of 18 and met his future wife, Jennifer, shortly after graduating. The two would go on to have a son, Jake. Benjamin was serving as First Officer on the USS Saratoga when the ship entered into the Battle of Wolf 369 against the Borg. Jennifer was tragically killed during the battle. Benjamin and Jake would later move to the space station Deep Space Nine, where Ben served as Commanding Officer. While serving on Deep Space Nine, he would eventually meet and marry a space freighter captain named Kasidy Yates.
      Ben loves baseball and cooking, a skill he learned from his father, who runs a Creole restaurant in New Orleans.`,
      id: 'sisko'
    },
    {
      name: 'Kira Nerys',
      rank: 'Commander',
      position: 'First Officer',
      race: 'Bajoran',
      photo: '/assets/images/defiant/kira.jpg',
      bio: 'Kira Nerys was born in 2343 on the then-Cardassian-occupied planet of Bajor. At the age of 13, Kira was recruited into the Bajoran resistance against the Cardassian occupation. She rose to the rank of Major in the Bajoran Militia by the age of 26. She was assigned as the senior Bajoran officer on the space station Deep Space Nine and initially resisted having to work with Starfleet officers, but would later become an open supporter of Bajor joining the Federation. She eventually rose to the rank of Colonel in the Bajoran Militia and temporarily granted the rank of Commander in Starfleet thanks to her role in the Dominion War.',
      id: 'kira'
    },
    {
      name: 'Jadzia Dax',
      rank: 'Lieutenant Commander',
      position: 'Science Officer',
      race: 'Trill',
      photo: '/assets/images/defiant/dax.jpg',
      bio: 'The Trill are a species of humanoid alien that participates in a symbiotic relationship with a species referred to as "symbionts." Certain Trill are chosen to host the symbionts and though they retain much of their own personality, they are able to access the thoughts and memories of the symbiont and its previous hosts. Being chosen as a host is considered a great honor. Before being joined with Jadzia, a young Trill woman, the symbiont Dax was known as Curzon Dax, a Federation ambassador to the Klingon Empire. Curzon became a close friend and mentor to Benjamin Sisko, who would later end up serving on Deep Space Nine with Jadzia Dax. Jadzia has inherited a fondness for Klingon culture and is a skilled fighter. She also enjoys playing card games and interacting with the wide variety of cultures passing through the space station.',
      id: 'dax'
    },
    {
      name: 'Nog',
      rank: 'Lieutenant Junior Grade',
      position: 'Helmsman',
      race: 'Ferengi',
      photo: '/assets/images/defiant/nog.jpg',
      bio: 'Nog was born on the planet Ferenginar in 2353. After his mother, Prinadora, left his father, Rom, for a richer Ferengi, Rom accepted a job working for his brother, Quark. Rom and Nog relocated to the space station Deep Space Nine, where Quark runs a popular bar and gaming hall. Nog quickly becomes friends with Jake Sisko, who is around his same age. Though mischevious and initially thought to be a "bad influence" on Jake, Nog is smart and capable, eventually becoming the first Ferengi to join Starfleet. He is commissioned as an Ensign during the Dominion War and is later promoted to Lieutenant, Junior Grade due to his service and bravery during the war.',
      id: 'nog'
    }
  ]
  show;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }
}

