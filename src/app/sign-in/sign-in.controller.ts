import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.tpl.pug',
})
export class SignInController {
  form: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = fb.group({
      email: '',
      password: '',
    });
  }

  onSubmit() {
    // Конечно тут нужен некий api.service, который будет делать POST-запрос
    // и по ответу редиректить на другой роут уже авторизаванного пользователя.
    // но сейчас тут localStorage.
    localStorage.setItem('authorize', JSON.stringify({ ...this.form.value }));

    console.log(`*** successfully signed in!`);
    this.router.navigate(['/admin'], { relativeTo: this.route });
  }
}
