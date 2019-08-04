import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { fire } from 'modules/firewatch';

@Component({
  templateUrl: 'admin.tpl.pug',
  styleUrls: ['admin.scss'],
})

export class AdminController {
  constructor(private router: Router, private route: ActivatedRoute) { }

  signOut() {
    this.router.navigate(['/sign-in'], { relativeTo: this.route });
    fire('logOut');
  }
}
