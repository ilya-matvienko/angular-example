import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SignInController } from './sign-in.controller';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [SignInController],
})
export class SignInModule { }
