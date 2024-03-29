import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from '@mycomp/ui-sdk/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
    console.log(ButtonComponent);
  }

  submit(): void {
    // this.authService.login(formValue.email, formValue.password).subscribe(() => {
    //     this.router.navigateByUrl(this.fragment ? this.fragment : this.jwtService.getUser().isClient() ? '/client' : '/firm');
    //   },
    //   (errorResponse: HttpErrorResponse) => {
    //     if (errorResponse.status === 401) {
    //       this.toastService.error('Email or password is incorrect');
    //     } else {
    //       this.toastService.error(errorResponse.message);
    //     }
    //   });
  }
}
