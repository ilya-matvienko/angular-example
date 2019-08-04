import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { watch } from 'modules/firewatch';

declare const FB;

@Component({
  templateUrl: 'sign-in.tpl.pug',
  styleUrls: ['sign-in.scss'],
})
export class SignInController implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ngZone: NgZone,
  ) {
    this.form = fb.group({
      email: '',
      password: '',
    });
  }

  ngOnInit() {
    this.initFB();

    watch('logOut').then(() => {
      if (localStorage.getItem('facebook')) {
        localStorage.removeItem('facebook');
        FB.logout();
      }

      localStorage.removeItem('authorize');
    });
  }

  facebookCheckStatus() {
    FB.getLoginStatus(response => {
      if (!response.authResponse) {
        this.loginFacebook();
        return;
      }

      this.router.navigate(['/admin'], { relativeTo: this.route });
    });
  }

  onSubmit() {
    // Конечно тут нужен некий api.service, который будет делать запрос
    // и по ответу редиректить на другой роут уже авторизаванного пользователя.
    // но сейчас тут localStorage.
    localStorage.setItem('authorize', '1');

    console.log(`*** successfully signed in!`);
    this.router.navigate(['/admin'], { relativeTo: this.route });
  }

  // Про это я вообще молчу, такие вещи лучше обрабатывать на сервере,
  // а на фронте юзать нормальный REST
  private initFB() {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId      : '2324165351182098',
        cookie     : true,
        xfbml      : true,
        version    : 'v4.0'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      let js;
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  private loginFacebook() {
    FB.login(response => {
      if (response.authResponse) this.ngZone.run(() => {
        localStorage.setItem('facebook', '1');
        this.onSubmit();
      });
      else console.warn(`*** login failure!`);
    });
  }
}
