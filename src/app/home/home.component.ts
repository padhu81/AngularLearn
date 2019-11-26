import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '*FirstAngular*';
  mycolor = 'red';

  constructor() { }
  changecolor():void{
    this.mycolor = 'orange' ;}
  

  ngOnInit() {
  }

}
