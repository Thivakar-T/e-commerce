import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  studentForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
constructor(private fb: FormBuilder,
  private route: Router,
  private router: ActivatedRoute){}
  
  ngOnInit(): void {
 

    
  }


  onSubmit() {
    this.Submitted = true;
  }


 
}