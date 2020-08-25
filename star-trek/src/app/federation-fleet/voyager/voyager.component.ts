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
      bio: 'Kathryn Janeway was the daughter of a Starfleet Vice Admiral and had a close relationship with him until his death. He raised her as a skeptic and a scientist, and she went on to study the sciences as a Starfleet cadet. Her first posting was under the command of Captain Owen Paris, father to Tom Paris, who would later serve under her command on Voyager. Janeway has the distinction of being the first Federation captain to lead a ship back from the Delta Quadrant and gained a reputation for being a skilled tactician against the Borg.',
      id: 'janeway'
    },
    {
      name: 'Chakotay',
      rank: 'Commander (provisional)',
      position: 'First Officer',
      race: 'Human',
      photo: '/assets/images/voyager/chakotay.jpg',
      bio: 'Chakotay grew up in a Federation colony near the border of Cardassian space. He joined Starfleet despite the disapproval of his father, who wanted him to stay nearer to home. After learning that his father had been killed while defending the colony against the Cardassians, Chakotay defected from Starfleet and joined the Maquis, a faction of former Federation citizens and Starfleet personnel rebelling against both the Federation and Cardassian governments. He was on a ship being pursued by the USS Voyager when both ships were unexpectedly transported to the Delta Quadrant. Multiple crew members on both ships were killed during this event, and the surviving members agreed to work together to find a way home. He became a trusted friend to Janeway and served as a respected liaison between the two groups.',
      id: 'chakotay'
    },
    {
      name: 'Tuvok',
      rank: 'Lieutenant',
      position: 'Chief of Security',
      race: 'Vulcan',
      photo: '/assets/images/voyager/tuvok.jpg',
      bio: 'Tuvok was born in a Vulcan colony and entered Starfleet due to pressure from his parents. He disliked his experience, believing humans to be arrogant and unwilling to compromise, and left the organization after his first assignment. He retuned to Vulcan to teach in an academy there and went on to marry his wife, T\'Pel, with whom he had four children. Being a parent made Tuvok realize that he may have been too impulsive when he left Starfleet, and he made the decision to return fifty years after leaving. He was able to look past his initial prejudices and establish cordial relationships with humans. He eventually became a close friend and advisor to Janeway, even writing to her while they were separated on different assignments before working together on Voyager.',
      id: 'tuvok'
    },
    {
      name: 'Tom Paris',
      rank: 'Lieutenant Junior Grade',
      position: 'Helmsman/Field Medic',
      race: 'Human',
      photo: '/assets/images/voyager/paris.jpg',
      bio: 'Tom Paris grew up in the shadow of his father, respected Starfleet Admiral Owen Paris. He was pressured into joining Starfleet by his father, where he proved to be a naturally talented pilot but an inattentive student. He was dishonorably discharged from Starfleet after making an error which led to the deaths of three other officers. He then joined the rebel organization the Maquis, but was quickly captured and convicted of treason. Captain Janeway requested his help on a rescue mission due to his familiarity with the terrain, and he agreed in exchange for his release from prison. Throughout what became the seven-year-long mission to return home from the Delta Quadrant, Tom matured a great deal, establishing relationships with fellow officers Harry Kim, who would become his best friend, and B\'Elanna Torres, whom he would later marry.',
      id: 'paris'
    },
    {
      name: 'B\'Elanna Torres',
      rank: 'Lieutenant Junior Grade (provisional)',
      position: 'Chief Engineer',
      race: 'Klingon/Human',
      photo: '/assets/images/voyager/torres.jpg',
      bio: 'B\'Elanna Torres was the child of a Human father and a Klingon mother. Tensions ran high between the Federation and Klingon Empire during her childhood, and B\'Elanna grew up feeling alienated and moody. Her father, unable to cope with living with two Klingon tempers, left the family when B\'Elanna was five, resulting in lifelong insecurities and anger issues. She enrolled in Starfleet Academy and displayed an impressive talent for engineering, but her defensiveness and temper often interfered with her success and she later dropped out, eventually joining the Maquis. She became close to fellow Maquis member Chakotay during this time, and initially resisted cooperating with Starfleet officers when the groups were forced to work together. Her engineering talents saved the ship on several occasions and she was able to overcome her past issues and become friends with her fellow shipmates. She married Tom Paris toward the end of the mission and they had a daughter, Miral, named for B\'Elanna\'s mother.',
      id: 'torres'
    },
    {
      name: 'Seven of Nine',
      rank: 'n/a',
      position: 'Astrophysicist',
      race: 'Borg-Augmented Human',
      photo: '/assets/images/voyager/sevenofnine.jpg',
      bio: 'Annika Hansen was born in a Federation colony and raised by her exobiologist parents, Magnus and Erin, who were studying the Borg. Using special shielding developed by Magnus, the family traveled undetected through Borg space, gathering information, until the ship was caught in an ion storm. The storm caused the shield to briefly go offline and the ship was quickly detected and the Hansens assimilated, turning them into zombie-like drones. Annika was given the designation "Seven of Nine" and spent eighteen years in total as a drone. During a failed attempt to sabotage and assimilate Voyager, her link to the Borg Collective was broken and Captain Janeway decided to try to rehabilitate her. She initially resisted, wishing to be reassimilated, and refused to answer to her former human name, keeping the name "Seven of Nine" (though she accepted the nickname "Seven" as she gradually readjusted to living as a human). The knowledge she retained from her time in the Collective enabled her to develop and implement technology previously unknown to the Federation, helping them on their journey.',
      id: 'seven'
    },
    {
      name: 'The Doctor',
      rank: 'n/a',
      position: 'Chief Medical Officer',
      race: 'Hologram (Human-appearing)',
      photo: '/assets/images/voyager/doctor.jpg',
      bio: 'Developed as a technology designed to function as a medical officer in emergency situations, The Doctor fell into the role of Chief Medical Officer after Voyager\'s medical personnel were killed during the ship\'s abduction to the Delta Quadrant. The Doctor was programmed with vast amounts of medical knowledge and the ability to learn and adapt, but was designed for short-term emergency use only, so personality and bedside manner were kept to a minimum and he often acted arrogant and impatient. Because he was kept running full-time, he began to display frustration with his confinement to sick bay (one of only two locations onboard equipped with holoemitters) as well as his treatment by the other crew members, who viewed him as a tool rather than an equal. Eventually, he began to develop compassion and artistic interests, and became to be appreciated and regarded by the rest of the crew as a living being with rights, and even as a friend.',
      id: 'doctor'
    },
    {
      name: 'Harry Kim',
      rank: 'Ensign',
      position: 'Operations Officer',
      race: 'Human',
      photo: '/assets/images/voyager/kim.jpg',
      bio: 'Harry Kim was born and grew up in South Carolina. He was very close to both of his parents, and was highly intelligent, graduating as valedictorian of his Starfleet class. Voyager was Harry\'s first assignment as a Starfleet officer, but due to his somewhat sheltered upbringing, he tended to be quiet and timid. He met and quickly became friends with the more outgoing and impulsive Tom Paris, who often encouraged him to come out of his shell. Though never promoted past the rank of Ensign during his time serving on Voyager, Kim was well-liked by his shipmates and considered a hardworking and capable officer.',
      id: 'kim'
    },
    {
      name: 'Neelix',
      rank: 'n/a',
      position: 'Chef, Morale Officer',
      race: 'Talaxian',
      photo: '/assets/images/voyager/neelix.jpg',
      bio: 'Native to the Delta Quadrant, Neelix was a young adult when his homeworld was occupied and decimated during a war with another alien species. Neelix managed to escape and worked a variety of jobs, including mining, waste management, and trading. He encountered the crew of the Voyager shortly their arrival in the Delta Quadrant and offered to help guide them in exchange for their assistance with the release of Kes, a woman who was being held captive and in whom Neelix was romantically interested. Neelix and Kes joined the ship and he was able to use his range of skills to serve as a guide. He became the ship\'s chef due to his interest in cooking, and was later appointed "morale officer," a position in which he learned and attempted to uphold the cultural traditions of the various crew members, as well as his own Talaxian heritage. Neelix left Voyager shortly before its return home so that he could stay with a group of Talaxian refugees living on a colonized asteroid, but maintained contact with the crew and was named by Captain Janeway as "Ambassador to the Delta Quadrant."',
      id: 'neelix'
    },
    {
      name: 'Kes',
      rank: 'n/a',
      position: 'Medical assistant',
      race: 'Ocampa',
      photo: '/assets/images/voyager/kes.jpg',
      bio: 'Kes was raised in an underground colony on the planet Ocampa, due to the inhospitable environment on the planet\'s surface. Prompted by curiosity about the outside world, Kes managed to sneak away from the colony and make it to the surface, but was quickly captured by a violent sect. Kes met and became enamored with a trader named Neelix during this time, and he managed to negotiate her release with the help of the Voyager crew. She and Neelix decided to stay onboard Voyager for a time for protection and to help them navigate the Quadrant. Kes was the first aboard Voyager to regard The Doctor as a person rather than a program, often acting as his advocate. He became a mentor of sorts, adopting her as an assistant and tutoring her in medicine. The romantic relationship between Kes and Neelix ended during their time on Voyager, but the two remained friends. Kes eventually developed intense mental powers, which began to cause damage to the ship. She made the decision to leave Voyager, and used her newfound powers to push the ship nearly ten thousand light years closer to Earth as a parting gift.',
      id: 'kes'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
