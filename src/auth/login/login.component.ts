import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform!: FormGroup
  Submitted = false;
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router, private toaster: ToastrService) {
  
  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      userName: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required, Validators.minLength(4)],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginform.controls
  }
  onSubmit() {
    this.Submitted = true;
    if (this.loginform.invalid) {
      this.toaster.error('Login Failed')
      this.toaster.warning('Enter Your Vaild Email Address And Password')
    }
    this.service.login(this.loginform.value).subscribe(res => {
      console.log(res);

      localStorage.setItem('currentUser', JSON.stringify(res));
      localStorage.setItem('token', res.data.jwt);
      localStorage.setItem('role', res.data.role);

      if (this.loginform.valid) {
        this.router.navigate(['/pages/Add-customer'])
        this.toaster.success('Login Successfully')
      } else {
        this.router.navigate(['/'])
      }


    },
      (error) => {
        console.log(error);

      }
    )




  }
}