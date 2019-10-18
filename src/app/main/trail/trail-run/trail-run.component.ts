import { Component, OnInit } from '@angular/core';
import { TrailService } from '../../trail.service';

@Component({
  selector: 'app-trail-run',
  templateUrl: './trail-run.component.html',
  styleUrls: ['./trail-run.component.css']
})
export class TrailRunComponent implements OnInit {

  private socket;

  constructor( private socketService : TrailService) { }

  ngOnInit() {
    console.log("hello");
  }

  Connect(){
    this.socketService.setSocket('http://localhost:8080');
    console.log(this.socketService.getSocket());
  }
  start(){
    this.socket = this.socketService.getSocket();
    console.log(this.socket);
    this.socket.on('connection',(data)=>{
      console.log(data);
    });
    this.socket.on('add',(data)=>{
      console.log(data);
    });
  }


}
