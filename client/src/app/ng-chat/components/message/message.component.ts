import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() public message?: Message;
  constructor() {}

  ngOnInit() {}
}
