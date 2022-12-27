import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UnitService } from '../unit/unit.service';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  form!: FormGroup;
  radio: any
  name: any
  Submitted = false;
  result: any;
  unittype: any = [];
  bedObj: any = {};



  constructor(private fb: FormBuilder,
    private service: ItemsService,
    private Service: UnitService,
  ) {

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      sellingprice: ['', Validators.required],
      type: [''],
      unitId: [''],
      description: ['']
    })
    this.getunitList();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls
  }

  getunitList() {
    this.Service
      .getByunit()
      .subscribe(
        (responce) => {
          this.unittype = responce;
          this.unittype = this.unittype.data;
        });
       
        
  }
  editBatch(id: any) {
    this.service
      .editgetByitems(id).subscribe(
        (res) => {
          this.bedObj = res.data;
        }
      );
    // this.modalService.open(subject, { size: 'md' });
  }
  onSubmit() {
    this.Submitted = true;
    console.log(this.form.value);
    this.service.createitems(this.form.value).subscribe(
      (responce) => {
        this.result = responce;
      }

    )




  }
  // checkpresent(event: any) {
  //   console.log(event.target.value);

  //   if (event.target.checked) {
  //     this.form.value.radio = '1'
  //   } else {
  //     this.form.value.radio = '0'
  //   }
  // }
}









