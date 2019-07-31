import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: 'admin.tpl.pug',
  styleUrls: ['admin.scss'],
})

export class AdminController {
  constructor(private router: Router, private route: ActivatedRoute) {}

  signOut() {
    localStorage.removeItem('authorize');
    this.router.navigate(['/sign-in'], { relativeTo: this.route });
  }
}
