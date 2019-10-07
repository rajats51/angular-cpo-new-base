import { Component, OnInit } from '@angular/core';
export interface Crew {
  name: string;
  role: string;
  imageName: string;
  subImageName: string;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
