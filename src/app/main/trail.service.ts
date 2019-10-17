import { Injectable } from '@angular/core';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  private socket ;
  constructor() { }
  getSocket(){
    return this.socket;
  }
  setSocket(hostUrl : string){
    this.socket = io(`${hostUrl}`);
  }
}
