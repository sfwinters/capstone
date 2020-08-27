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
      bio: `Benjamin Lafayette Sisko was raised by his father, Joseph Sisko, in New Orleans, Louisiana. He entered Starfleet Academy at the age of 18 and met his future wife, Jennifer, shortly after graduating. The two would go on to have a son, Jake. Benjamin was serving as First Officer on the USS Saratoga when the ship entered into the Battle of Wolf 369 against the Borg. Jennifer was tragically killed during the battle. Benjamin and Jake would later move to the space station Deep Space Nine, where Ben served as Commanding Officer. While serving on Deep Space Nine, he would eventually meet and marry a space freighter captain named Kasidy Yates.
      Ben was known to love baseball and cooking, a skill he learned from his father, who runs a Creole restaurant in New Orleans.`,
      id: 'sisko'
    },
    {
      name: 'Kira Nerys',
      rank: 'Colonel (Bajoran Militia)',
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
      bio: 'The Trill are a species of humanoid alien that participates in a symbiotic relationship with a species referred to as "symbionts." Certain Trill are chosen to host the symbionts and though they retain much of their own personality, they are able to access the thoughts and memories of the symbiont and its previous hosts. Being chosen as a host is considered a great honor. Before being joined with Jadzia, a young Trill woman, the symbiont Dax was known as Curzon Dax, a Federation ambassador to the Klingon Empire. Curzon became a close friend and mentor to Benjamin Sisko, who would later end up serving on Deep Space Nine with Jadzia Dax. Jadzia inherited a fondness for Klingon culture and was a skilled fighter. She also enjoyed playing card games and interacting with the wide variety of cultures passing through the space station.',
      id: 'dax'
    },
    {
      name: 'Julian Bashir',
      rank: 'Lieutenant',
      position: 'Chief Medical Officer',
      race: 'Genetically-augmented Human',
      photo: '/assets/images/defiant/bashir.jpg',
      bio: 'Julian Subatoi Bashir grew up as a small and physically awkward child, as well as intellectually inferior to his peers. When he was 7, his worried parents took him to an off-planet hospital, where he underwent a series of illegal treatments designed to resequence his DNA and enhance his mental capabilities. As a result, both his physical and intellectual abilities rapidly improved until he surpassed his peers in both areas. He entered Starfleet to become a doctor and was such an outstanding student that he was offered his choice of post upon graduation. He chose to be assigned to the remote space station Deep Space Nine, believing that he would get to witness "real frontier medicine." His genetic enhancements were discovered by Starfleet during this time, resulting in his father serving time in a penal colony on Earth.',
      id: 'bashir'
    },
    {
      name: 'Nog',
      rank: 'Lieutenant Junior Grade',
      position: 'Helmsman',
      race: 'Ferengi',
      photo: '/assets/images/defiant/nog.jpg',
      bio: 'Nog was born on the planet Ferenginar in 2353. After his mother, Prinadora, left his father, Rom, for a richer Ferengi, Rom accepted a job on Deep Space Nine working for his brother, Quark. Nog quickly became friends with Jake Sisko, who is around his same age. Though mischevious and initially thought to be a "bad influence" on Jake, Nog is smart and capable, eventually becoming the first Ferengi to join Starfleet. He is commissioned as an Ensign during the Dominion War and is later promoted to Lieutenant, Junior Grade due to his service and bravery during the war.',
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

