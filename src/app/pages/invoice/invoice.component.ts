import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  form!: FormGroup;
  addObj: any = {}
  amount = 0;
  order: any
  optionlist: any
  taxlist: any
  constructor(private fb: FormBuilder,
    private router: Router,
    private toaster: ToastrService) {
    this.optionlist = [
      { option: 'Configure Terms' },
    ]
    this.taxlist = [
      { tax: 'Manage TCS' },
    ]


  }
  ngOnInit(): void {
    this.form = this.fb.group({

      totalAmount: [0],
      country: [''],
      address: this.fb.array([
        this.vendorPurchaseMaterialList()
      ])
    })



  };

  navigate(event: any) {

    let Value = event.target.value;

    Value === "Configure Terms" ? this.router.navigateByUrl('/main/configureterms')
      : Value === "Manage TCS" ? this.router.navigateByUrl('/main/managetcs') : this.router.navigateByUrl('');
  }

  calculateTotal(event: any, index: any) {
    console.log(event.value)
    console.log(index)
    this.addObj.address = event.value;
    for (let i = 0; i < this.addObj.address.length; i++) {
      if (Number(this.addObj.address[i].city) > Number(this.addObj.address[i].street)) {
        this.addObj.address[i].diff = Number(this.addObj.address[i].city) - Number(this.addObj.address[i].street);
        this.addObj.address[i].total = this.addObj.address[i].diff * 0.05
      }
      else {
        this.toaster.error("Max Value should be Greater")
      }
    }

    console.log(this.addObj)
    let docArrList = <FormArray>this.form.controls['address'];
    docArrList.controls = [];
    if (this.addObj.address.length > 0) {
      for (let val of this.addObj.address) {
        docArrList.push(this.vendorPurchaseMaterialList());
      }
    }
    this.form.patchValue({ address: this.addObj.address });
    // this.calculateTotalAmount(event,index)
  }
  submit() {
    console.log(this.form.value)
    if (this.form.value != '') {
      localStorage.setItem("value", JSON.stringify(this.form.value))
      this.toaster.success("Submitted Successfully")
    }

  }
  delete(index: any) {
    this.vendorWiseList.removeAt(index);
    this.toaster.error("Deleted Successfully")
  }

  vendorPurchaseMaterialList() {
    return this.fb.group({
      street: [0],
      city: [0],
      total: [0],
      diff: [0],
      per: ["5%"],
      totalAmount: [0]
    });
  }
  get vendorWiseList(): FormArray {
    return (<FormArray>this.form.get('address')) as FormArray;
  }

  addItem() {
    let total = this.form.value.total
    let city = this.form.value.city
    let street = this.form.value.street
    let check = this.form.value.present
    let count = this.form.value.country

    this.order = this.vendorPurchaseMaterialList();
    this.vendorWiseList.push(this.order);
    console.log(this.vendorWiseList.controls)


  }
  
}

