import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  brew: Object | any;
// Dependency Injection
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.teamMethod().subscribe(data =>{
      this.brew = data;
      console.log(this.brew)
    });
  }

}
