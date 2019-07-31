import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SignInController } from './sign-in.controller';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  exports: [],
  declarations: [SignInController],
  providers: [],
})
export class SignInModule {
}
