import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailComponent } from './main/trail/trail.component';
import { TrailLogComponent } from './main/trail/trail-log/trail-log.component';
import { TrailRunComponent } from './main/trail/trail-run/trail-run.component';
import { TrailService } from './main/trail.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TrailComponent,
    TrailLogComponent,
    TrailRunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TrailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
