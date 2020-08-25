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
      bio: 'Jean-Luc Picard was born on July 13, 2305 in La Barre, France. His lifelong dream was to join Starfleet; however, as a brash and arrogant young man, he failed his first entrance exam. He was later accepted and, shortly after graduation, was stabbed in the heart during a bar fight, resulting in the implantation of an artificial heart. Despite (or as a result of) these experiences, Picard grew up to be an extremely intelligent, thoughtful, and diplomatic man as well as a cunning tactical officer. Picard is one of few known beings to have recovered after assimilation by the Borg. He enjoys archeology, detective stories, and tea: Earl Grey, hot.',
      id: 'picard'
    },
    {
      name: 'William Riker',
      rank: 'Commander',
      position: 'First Officer',
      race: 'Human',
      photo: '/assets/images/1701d/riker.jpg',
      bio: 'William Thomas Riker was raised in Alaska by his father after the death of his mother, Betty, when he was two years old. He left home at the age of 15 after being abandoned by his father. Will joined Starfleet in 2353 and quickly earned a reputation for being a loyal and dutiful officer. While stationed on the planet Betazed, he began a relationship with a Betazoid woman named Deanna Troi. Years after the relationship ended, both would end up being assigned roles on the USS Enterprise and became close friends. He is an accomplished pilot and tactician, as well as being a skilled jazz trombonist and martial artist.',
      id: 'riker'
    },
    {
      name: 'Data',
      rank: 'Lieutenant Commander',
      position: 'Science Officer',
      race: 'Android',
      photo: '/assets/images/1701d/data.jpg',
      bio: 'Data was created by Dr. Noonien Soong, a highly respected scientist and cyberneticist who later fell into disgrace. Data is one of only six known "Soong-type" androids, notable for their nearly-human appearance and sophisticated positronic brains. Though physically and mentally superior to humans (and most known species), Data greatly admires humans and openly wishes that he could become one, striving to understand human traits such as emotions and humor. He was nonetheless able to establish close attachments and friendships, particularly with Geordi La Forge, his best friend, and Spot, his cat.',
      id: 'data'
    },
    {
      name: 'Deanna Troi',
      rank: 'Lieutenant Commander',
      position: 'Ship\'s Counselor',
      race: 'Betazoid/Human',
      photo: '/assets/images/1701d/troi.jpg',
      bio: 'Deanna Troi was born March 29, 2336 on the planet Betazed to a Betazoid mother, Lwaxana Troi, and a human father, Ian Andrew Troi. She was raised as an only child; her older sister Kestra drowned when Deanna was a baby. Her father died when she was seven years old, and she holds many fond memories of him. Deanna\'s Betazoid blood allows her to sense the emotions of many other humanoid alien races, which proves useful in her role as ship\'s counselor. She also has the ability to telepathically communicate with other Betazoids. Deanna often joins in the officers\' poker games and is especially fond of chocolate.',
      id: 'troi'
    },
    {
      name: 'Geordi La Forge',
      rank: 'Lieutenant Commander',
      position: 'Chief Engineer',
      race: 'Human',
      photo: '/assets/images/1701d/geordi.jpg',
      bio: 'Geordi La Forge was born February 16, 2335 in Somalia to two Starfleet officers, Captain Silva La Forge and Comander Edward La Forge. Blind from birth, his vision is augmented with a device called a VISOR (Visual Instrument and Sensory Organ Replacement). The VISOR attaches to surgical implants in Geordi\'s temples and allow him to see a wide range of light, electromagnetic, heat, and radio waves far beyond normal human capability. He is an extraordinarily talented engineer with a knack for modifying and repairing a wide range of devices. Though somewhat unlucky in romantic relationships, Geordi is friendly and affable and has a close friendship with Data.',
      id: 'geordi'
    },
    {
      name: 'Worf',
      rank: 'Lieutenant',
      position: 'Chief Security Officer',
      race: 'Klingon',
      photo: '/assets/images/1701d/worf.jpg',
      bio: 'Worf was born on the Klingon home planet of Qo\'noS, but moved as a small child with his parents to a colony on the planet Khitomer. Both of Worf\'s parents were killed soon after in a Romulan attack on the colony, leaving him orphaned. He was found and subsequently adopted by a Federation officer, Nikolai Rozhenko, and his wife Helena. He was raised by the Rozhenkos as their own son along with their biological son, Nikolai. Despite being raised by humans, Worf feels a deep connection to his Klingon heritage, participating in the traditional Rite of Ascension at the age of fifteen. He later became the first Klingon to join Starfleet and earned the trust and respect of several high-ranking Klingon officials, eventually becoming adopted into the House of Martok, a highly-esteemed house in Klingon society. After his service aboard the USS Enterprise, he was eventually stationed aboard Deep Space Nine, where he met and later married Science Officer Jadzia Dax.',
      id: 'worf'
    },
    {
      name: 'Dr. Beverly Crusher',
      rank: 'Commander',
      position: 'Chief Medical Officer',
      race: 'Human',
      photo: '/assets/images/1701d/beverly.jpg',
      bio: 'Beverly Howard was raised by her grandmother Felisa after the death of her parents. Felisa was an accomplished healer and often enlisted Beverly as a helper, leading to Beverly\'s lifelong interest in medicine. Highly intelligent, she graduated at the top of her class from Starfleet with a concentration in medicine. During her studies, she met her future husband, Jack Crusher. They would eventually have a son, Wesley. Jack was killed during an away mission when Wesley was five years old. Jean-Luc Picard escorted Jack\'s body home, but he and Beverly would not meet again until years later when both were assigned to the Enterprise. They would become close friends during their service together. Beverly is an accomplished dancer and enjoys performance of all kinds, often staging plays and encouraging her fellow crew members to participate.',
      id: 'beverly'
    },
    {
      name: 'Tasha Yar',
      rank: 'Lieutenant',
      position: 'Chief Security Officer',
      race: 'Human',
      photo: 'assets/images/1701d/tasha.jpg',
      bio: 'Natasha "Tasha" Yar was born on the planet Turkana IV. After the collapse of the government on the planet and the death of her parents, she and her younger sister were forced to fend for themselves until Tasha was able to escape the planet at the age of fifteen. She credited Starfleet as saving her from her former life, where she had to scavenge for food and avoid violent gangs. She was a skilled combatant, even becoming Chief Security Officer on the Enterprise, but was killed less than a year into the assignment, in a display of aggression by a creature named Armus during an away mission. Despite her short service on board the ship, Tasha is remembered fondly by her fellow officers, particularly Data, who has described her as being "special" to him.',
      id: 'tasha'
    },
    {
      name: 'Miles O\'Brien',
      rank: 'Senior Chief Petty Officer',
      position: 'Transporter Chief',
      race: 'Human',
      photo: '/assets/images/1701d/obrien.jpg',
      bio: 'Miles O\'Brien was raised in a traditional Irish family on Earth. He is proud of the fact that his mother insisted on home-cooking meals rather than relying on replicator technology. An avid cello player, he turned down an acceptance into the Aldeberan Music Academy in favor of joining Starfleet Academy. During his time aboard the Enterprise, he was introduced to a botanist named Keiko Ishikawa by their mutual friend, Data. Keiko and Miles later married. They have two children, a daughter named Molly and a son named Kirayoshi (named in part after Kira Nerys, who carried him as a surrogate). Miles served on both the Enterprise and Deep Space Nine, eventually accepting a professorship on Earth at Starfleet Academy.',
      id: 'obrien'
    },
    {
      name: 'Guinan',
      rank: 'n/a',
      position: 'Bartender',
      race: 'El-Aurian',
      photo: '/assets/images/1701d/guinan.jpg',
      bio: 'Guinan tends bar at Ten Forward, the lounge onboard the USS Enterprise-D. Little is known about Guinan\'s personal life, other than that she was born sometime prior to the late 19th century and has had many spouses and children. Her homeworld was destroyed by the Borg sometime during the 23rd century and she was able to escape to Earth as a refugee. She is not a Starfleet officer, but is highly respected by the Enterprise crew for her wisdom and compassion.',
      id: 'guinan'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
