import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private route: ActivatedRoute) { }

  canActivate() {
    if (localStorage.getItem('authorize')) return true;

    this.router.navigate(['/sign-in'], { relativeTo: this.route });
    return false;
  }
}
