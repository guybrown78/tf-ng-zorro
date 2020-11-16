import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private message: NzMessageService) {}

  ngOnInit(): void {
  }

  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }

  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

}
