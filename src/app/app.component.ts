import { Component, OnInit } from '@angular/core';

export interface Crew {
  name: string;
  role: string;
  imageName: string;
  subImageName: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit   {
  ngOnInit() {
    console.log('App Started');
  }
}
