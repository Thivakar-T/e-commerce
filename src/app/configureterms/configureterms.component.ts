import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configureterms',
  templateUrl: './configureterms.component.html',
  styleUrls: ['./configureterms.component.scss']
})
export class ConfiguretermsComponent implements OnInit {
  configureform!: FormGroup
  order: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.configureform = this.fb.group({
      term: [""],
      day: [""],
      object: this.fb.array([
        this.configureMaterialList()
        
      ])
    })
    
    
  };
  
  configureMaterialList() {
    return this.fb.group({
      term: [""],
      day: [""]
    });
  }
  get configureList(): FormArray {
    return (<FormArray>this.configureform.get('object')) as FormArray;
  }

  addItem() {
    this.order = this.configureMaterialList();
    this.configureList.push(this.order);
    console.log(this.configureList.controls)


  }
  submit() {
console.log(this.configureform.value);

  }
  delete(index: any) {
    this.configureList.removeAt(index);
  }
}

