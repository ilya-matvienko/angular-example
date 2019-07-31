import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: 'admin.tpl.pug',
})

export class AdminController implements OnInit {
  constructor() {
  }

  ngOnInit() {
    console.warn('ЕЩЕ ОДИН ХУЙ');
  }
}
