import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  loginform!: FormGroup
  Submitted = false;
  service: any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],

    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginform.controls
  }
  onSubmit() {
    this.Submitted = true;
  
    


  }
}