import { Component, OnInit } from '@angular/core';
import { KshipsService } from './kships.service';

@Component({
  selector: 'app-klingon-fleet',
  templateUrl: './klingon-fleet.component.html',
  styleUrls: ['./klingon-fleet.component.css']
})
export class KlingonFleetComponent implements OnInit {

  constructor(private shipsList: KshipsService) { }

  ngOnInit(): void {
    this.getShips()
  }
  kships;
  getShips() {
    this.kships = this.shipsList.getShips()
  }

}
