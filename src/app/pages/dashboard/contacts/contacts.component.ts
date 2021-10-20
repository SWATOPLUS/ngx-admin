import { Component, OnDestroy } from '@angular/core';

interface User {
  name: string;
  picture: string;
}

interface Contacts {
  user: User;
  type: string;
}

interface RecentUsers extends Contacts {
  time: number;
}

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  private time: Date = new Date();

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };

  contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];

  recent: RecentUsers[] = [
    {
      user: this.users.alan,
      type: this.types.home,
      time: this.time.setHours(21, 12),
    },
    {
      user: this.users.eva,
      type: this.types.home,
      time: this.time.setHours(17, 45),
    },
    {
      user: this.users.nick,
      type: this.types.mobile,
      time: this.time.setHours(5, 29),
    },
    {
      user: this.users.lee,
      type: this.types.mobile,
      time: this.time.setHours(11, 24),
    },
    {
      user: this.users.jack,
      type: this.types.mobile,
      time: this.time.setHours(10, 45),
    },
    {
      user: this.users.kate,
      type: this.types.work,
      time: this.time.setHours(9, 42),
    },
    {
      user: this.users.kate,
      type: this.types.work,
      time: this.time.setHours(9, 31),
    },
    {
      user: this.users.jack,
      type: this.types.mobile,
      time: this.time.setHours(8, 0),
    },
  ];
}
