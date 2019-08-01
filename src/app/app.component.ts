import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.tpl.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = [
    {
      title: 'Sign In',
      src: 'sign-in',
    },
    {
      title: 'Admin',
      src: 'admin',
    },
  ];
}
