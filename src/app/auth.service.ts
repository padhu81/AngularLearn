import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements  CanActivate {
 
private authResponse = new BehaviorSubject(false);
public authenticated = this.authResponse.asObservable();

  constructor() { }
authenticate(){
  this.authResponse.next(true);
}

canActivate():Observable<boolean>{
  return this.authenticated

}
logout(){
  this.authResponse.next(false);
}

}
