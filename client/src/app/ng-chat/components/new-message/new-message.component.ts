import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  public message = '';
  @Output() public send = new EventEmitter<string>();

  constructor() {}

  sendMessage() {
    this.send.emit(this.message);
    this.message = '';
  }
}
