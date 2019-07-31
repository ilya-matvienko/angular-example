import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.tpl.pug',
})

export class SignInController implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.warn('ХУЙ');
  }
}
