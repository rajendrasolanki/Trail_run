import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../trail.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-trail-log',
  templateUrl: './trail-log.component.html',
  styleUrls: ['./trail-log.component.css']
})
export class TrailLogComponent implements OnInit {

  constructor( private socketService : TrailService) { }

  ngOnInit() {
    console.log(this.socketService.getSocket());
  }

}
