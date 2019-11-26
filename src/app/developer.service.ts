import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  baseUrl:string = "https://developer-service-overspeedy-celebratedness.cfapps.io";
  devs:Developer[];
  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private httpClient:HttpClient) {}
  
  addDeveloper(dev: Developer) {
    return this.httpClient.post<Developer>(this.baseUrl+"/developer",
        dev,this.postHeaders).subscribe(
          response=>console.log(response),
          error=>this.handleError(error)
    );
  }

  getAllDevelopers(): Observable<Developer[]> {
    return this.httpClient.get<Developer[]>(this.baseUrl+"/developers").pipe(
      map(response=>{
        this.devs = response;
        return response;
      }),
      catchError(this.handleError<any>())
    )
  }

  getDeveloperById(devId: number): Developer {
    return this.devs.find(dev=>dev.id==devId)
  }

  private handleError<T>( result?: T) {
    return (error: any): Observable<T> => {
      console.log('An Error occured' + error);
      return null;
    }
  }

}