import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  mustDisable = true;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test Name';
  userName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

   onCreateServer(){
     this.serverCreationStatus = 'Server was created. Its name is ' + this.serverName;
   }

  ngOnInit(): void {
  }

  onUpdateName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onSetUserName() {
    this.userName = '';
  }

  verifyEnable(event:Event) {
    this.mustDisable = (<HTMLInputElement>event.target).value.length < 3;
  }

}
