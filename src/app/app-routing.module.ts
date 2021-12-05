import { LandOFAlwaysWinterComponent } from './land-ofalways-winter/land-ofalways-winter.component';
import { NorthOfTheWallComponent } from './north-of-the-wall/north-of-the-wall.component';
import { WinterFellComponent } from './winter-fell/winter-fell.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path: "", component:WinterFellComponent},
  {path:"north",component:NorthOfTheWallComponent},
  {path:"knightKing",component:LandOFAlwaysWinterComponent},
  {path:"teams",component:TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
