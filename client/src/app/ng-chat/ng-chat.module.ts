import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatComponent,
    MessageListComponent,
    MessageComponent,
    NewMessageComponent
  ],
  exports: [ChatComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule]
})
export class NgChatModule {}
