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
  serverCreated = false;
  serverName = 'Test Name';
  userName = '';
  servers = ['TestServer', 'TestServer2'];
  clicksDisplay = [];
  displayText = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

   onCreateServer(){
     this.serverCreated = true;
     this.servers.push(this.serverName);
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

  toggleDisplay() {
    this.displayText = !this.displayText;
    this.clicksDisplay.push({id: this.clicksDisplay.length, Display: this.displayText});
  }
}
