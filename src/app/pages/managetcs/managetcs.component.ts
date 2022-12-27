import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managetcs',
  templateUrl: './managetcs.component.html',
  styleUrls: ['./managetcs.component.scss']
})
export class ManagetcsComponent implements OnInit {
  tcsform!: FormGroup;
  ngOnInit(): void {
   
  }
  submit(){
    
  }

}
