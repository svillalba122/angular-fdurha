import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicies/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(private chat: ChatService) {}

  ngOnInit() {}

  onMessage(message: string) {
    this.chat.send(message);
  }
}
