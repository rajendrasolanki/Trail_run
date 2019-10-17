import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailComponent } from './main/trail/trail.component';
import { TrailLogComponent } from './main/trail/trail-log/trail-log.component';
import { TrailRunComponent } from './main/trail/trail-run/trail-run.component';

const routes: Routes = [
  {
    "path" : "",
    "component" : TrailComponent,
    "children" : [
      {
        "path" : "trailRun",
        "component" : TrailRunComponent
      },
      {
        "path" : "trailLog",
        "component" : TrailLogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
