import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borg',
  templateUrl: './borg.component.html',
  styleUrls: ['./borg.component.css']
})
export class BorgComponent implements OnInit {
  borg = [
    {
      name: 'Borg Cube',
      class: 'unknown',
      type: 'unknown',
      owner: 'Borg Collective',
      photo: '/assets/images/borg/cube.jpg',
      info: 'Rather than being one distinct ship, Borg cubes were one of two main types of vessels known to be used by the Borg Collective, and the most widely known. They are highly resistant to damage due to their massive size (at least 3 km per edge) and decentralized structure, meaning that they lack traditional ship sections such as a bridge or engine room. The Borg\'s ability to quickly absorb knowledge and technology from species it encounters allow their vessels to almost instantly develop defenses against various types of weapons.',
      id: 'cube'
    },
    {
      name: 'Borg Sphere',
      class: 'unknown',
      type: 'unknown',
      owner: 'Borg Collective',
      photo: '/assets/images/borg/sphere.jpg',
      info: 'Borg Spheres are the second-most widely known Borg vessel. They are primarily used for long-range missions, such as scouting. They are considerably smaller than Cubes, though still quite large (around 600 m in diameter). They are known to have specialized armor and tractor beams, but are able to be destroyed by quantum torpedoes if their shields can be brought offline.',
      id: 'sphere'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
