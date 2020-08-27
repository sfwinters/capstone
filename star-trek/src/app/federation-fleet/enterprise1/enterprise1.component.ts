import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise1',
  templateUrl: './enterprise1.component.html',
  styleUrls: ['./enterprise1.component.css']
})
export class Enterprise1Component implements OnInit {

  tosCrew = [
    {
      name: 'James T. Kirk',
      rank: 'Captain',
      position: 'Commanding Officer',
      race: 'Human',
      photo: '/assets/images/1701/kirk.jpg',
      bio: 'James Tiberius Kirk was born in Iowa on the planet Earth. He is one of the most decorated officers in Starfleet history and is particularly notable as the first and only Starfleet cadet ever to "win" the Kobayashi Maru, a test given to cadets training for command positions. The test consists of an "unwinnable" scenario designed to test a cadet\'s critical thinking and decision-making skills. Kirk defeated the test by reprogramming the simulation\'s computer program, for which he received a commendation for original thinking. He quickly rose through the ranks as an officer and became Captain of the USS Enterprise at the age of thirty-two. The ship\'s missions under Kirk\'s command would later become required reading for future Starfleet cadets. He set a record number of first contacts by a Starfleet captain, surpassed only by Captain Kathryn Janeway decades later.',
      id: 'kirk'
    },
    {
      name: 'Spock',
      rank: 'Lieutenant Commander',
      position: 'First Officer, Science Officer',
      race: 'Vulcan/Human',
      photo: '/assets/images/1701/spock.jpg',
      bio: 'Spock was born in the city of Shi\'Kahr on the planet Vulcan to Sarek, a Vulcan diplomat, and Amanda Grayson, a Human schoolteacher. He was often tormented by his full-blooded Vulcan peers, who would try to provoke him into showing emotion. He graduated from Starfleet Academy in 2250 with an A7 computer expert classification. He was assigned to the USS Enterprise as a science officer four years later, under the command of then-Captain Christopher Pike. He became First Officer after James T. Kirk later assumed command of the ship and would prove to be an invaluable officer, as well as an advisor and close friend to Kirk. Spock left Starfleet at the end of the Enterprise\'s five-year mission under Kirk, deciding to return to his home planet of Vulcan. He would return two and a half years later to help with what became known as the V\'ger Crisis, and eventually became a Federation ambassador. Spock received awards from both Starfleet and the Vulcanian Scientific Legion of Honor during his career and is now considered one of the Federation\'s most respected and distinguished figures.',
      id: 'spock'
    },
    {
      name: 'Dr. Leonard "Bones" McCoy',
      rank: 'Lieutenant Commander',
      position: 'Chief Medical Officer',
      race: 'Human',
      photo: '/assets/images/1701/bones.jpg',
      bio: 'Leonard McCoy was born and raised in Georgia, on the planet Earth. Unlike the majority of Starfleet officers, who attend and graduate from Starfleet Academy, McCoy attended the University of Mississippi. He joined Starfleet in his mid-twenties after separating from his wife. He subsequently attended classes at the Academy and was commissioned as an officer. McCoy was passionate about his work as a doctor and considered himself somewhat old-fashioned, often keeping stashes of alcohol in his sick bay. James Kirk gave him the nickname "Bones" after the 19th century slang term "sawbones," used to refer to battlefield medics. However, McCoy also appreciated the technology of his time and dismissively referred to 20th century medical practices as "medieval." He was known as somewhat gruff and irritable, but felt extreme compassion for living things and developed close friendshps with Spock and Kirk in particular.',
      id: 'bones'
    },
    {
      name: 'Montgomery Scott',
      rank: 'Lieutenant Commander',
      position: 'Second Officer, Chief Engineer',
      race: 'Human',
      photo: '/assets/images/1701/scotty.jpg',
      bio: 'Montgomery Scott, called "Scotty" by his crewmates, was born in Edinburgh, Scotland. He studied engineering at Starfleet Academy and quickly earned a reputation as a "miracle worker" with machines. He served as Second Officer on the Enterprise, taking command when necessary, but preferred his work as an engineer to the idea of pursuing a command position. His nephew, Peter Preston, served alongside him on a training mission but was killed in a surprise attack. Scott was heartbroken at the loss of his nephew, but felt a great pride in his long Starfleet career and the Enterprise in particular. He eventually retired from Starfleet at the age of 72, having served for 51 years.',
      id: 'scotty'
    },
    {
      name: 'Nyota Uhura',
      rank: 'Lieutenant',
      position: 'Communications Officer',
      race: 'Human',
      photo: '/assets/images/1701/uhura.jpg',
      bio: 'Nyota Uhura was born and raised in Kenya. She was, fittingly, named for the Swahili word for "star." During her time in Starfleet Academy, she demonstrated notable talents for languages and mathematics, eventually becoming a Communications Officer, but proved to be a well-rounded officer capable of handling most any challenge she faced. She was also musically talented, learning to play the Vulcan lyre (one of few non-Vulcans to do so). She would often entertain her crewmates with her singing ability and make up her own versions of songs to fit the current situation.',
      id: 'uhura'
    },
    {
      name: 'Pavel Chekov',
      rank: 'Ensign',
      position: 'Helmsman',
      race: 'Human',
      photo: '/assets/images/1701/chekov.jpg',
      bio: 'Pavel Andreievich Chekov (Павел Андреевич Чеков) was born in Russia and remained fiercely proud of his heritage throughout his Starfleet career, often (erroneously) claiming that various inventions, stories, and even popular sayings originated in Russia. The USS Enterprise was Chekov\'s first assignment upon graduating from Starfleet Academy, making him several years younger than most of his crewmates. He served on the Enterprise for only two years out of the ship\'s five-year mission under Captain Kirk, but developed a lifelong friendship during that time with fellow helmsman Hikaru Sulu. Chekov would return to the ship years later as a Lieutenant and tactical officer.',
      id: 'chekov'
    },
    {
      name: 'Hikaru Sulu',
      rank: 'Lieutenant',
      position: 'Helmsman',
      race: 'Human',
      photo: '/assets/images/1701/sulu.jpg',
      bio: 'Hikaru Kato Sulu was born in San Francisco, California. Sulu studied astrophysics and underwent pilot training while enrolled in Starfleet. He was an exceptional pilot and familiarized himself with a wide variety of ships, both current and historical. He had an equally wide variety of interests, including botany, antique Earth firearms, and judo.',
      id: 'sulu'
    },
    {
      name: 'Christine Chapel',
      rank: 'Lieutenant Junior Grade',
      position: 'Head Nurse',
      race: 'Human',
      photo: '/assets/images/1701/chapel.jpg',
      bio: 'Christine Chapel was raised in New Orleans, Louisiana. She demonstrated an early interest in science, originally studying bio-research before eventually enrolling in Starfleet Academy. Her first assignment upon graduation was Head Nurse aboard the USS Enterprise, working under Dr. McCoy. Despite McCoy\'s brusque personality, they worked well together. Chapel shared McCoy\'s passion for medicine, prioritizing it above her station as an officer, and had no reservations about speaking out against his decisions when she felt the situation warranted it. She would eventually become a doctor and returned to the Enterprise in 2273. She and Uhura were close friends during their time together on the Enterprise.',
      id: 'chapel'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
