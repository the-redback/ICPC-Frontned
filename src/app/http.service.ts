import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  myMethod(){
     //return this.http.get('https://anapioficeandfire.com/api/characters')
     return this.http.get('https://game-of-thrones-quotes.herokuapp.com/v1/random/5')
   //return console.log("The master will erase the world and all memory of it.")
   //return this.http.get('https://api.openbrewerydb.org/breweries')

  }
  teamMethod(){
         return this.http.get('http://localhost:8080/teams')
  }
}
