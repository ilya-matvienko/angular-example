import { Component } from '@angular/core';
import { uniq } from 'ramda';

@Component({
  selector: 'app-root',
  templateUrl: './app.tpl.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Router';
}
