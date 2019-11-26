import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

authenticated:boolean=false;

constructor(private authService:AuthService){}

logout(){
  this.authService.logout();
}


  ngOnInit(): void {
     this.authService.authenticated.subscribe(
       res=>this.authenticated = res
     );


  }




   
}
