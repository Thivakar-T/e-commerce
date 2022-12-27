import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  studentForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
  addObj: any;
  order: any;

  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private toaster:ToastrService) {



  }

  ngOnInit(): void {

    this.studentForm = this.fb.group({
      FirstName: ['', Validators.required],
      lastName: ['', Validators.required],
      Designation: ['', Validators.required],
      Department: ['', Validators.required],
      Website: ['', Validators.required],
      id: [''],
    });

    this.studentForm = this.fb.group({

      totalAmount: [0],
      country: [''],
      address: this.fb.array([
        this.vendorPurchaseMaterialList()
      ])
    })



  }



  // navigate(event: any) {

  //   let Value = event.target.value;

  //   Value === "Configure Terms" ? this.route.navigateByUrl('/configureterms')
  //     : Value === "Manage TCS" ? this.route.navigateByUrl('/managetcs') : this.route.navigateByUrl('');
  // }

  // calculateTotal(event: any, index: any) {
  //   console.log(event.value)
  //   console.log(index)
  //   this.addObj.address = event.value;
  //   for (let i = 0; i < this.addObj.address.length; i++) {
  //     if (Number(this.addObj.address[i].city) > Number(this.addObj.address[i].street)) {
  //       this.addObj.address[i].diff = Number(this.addObj.address[i].city) - Number(this.addObj.address[i].street);
  //       this.addObj.address[i].total = this.addObj.address[i].diff * 0.05
  //     }
  //     else {
  //       this.toaster.error("Max Value should be Greater")
  //     }
  //   }

  //   console.log(this.addObj)
  //   let docArrList = <FormArray>this.studentForm.controls['address'];
  //   docArrList.controls = [];
  //   if (this.addObj.address.length > 0) {
  //     for (let val of this.addObj.address) {
  //       docArrList.push(this.vendorPurchaseMaterialList());
  //     }
  //   }
  //   this.studentForm.patchValue({ address: this.addObj.address });
  // }



  submit() {
    console.log(this.studentForm.value)
    if (this.studentForm.value != '') {
      localStorage.setItem("value", JSON.stringify(this.studentForm.value))
      this.toaster.success("Submitted Successfully")
    }

  }


  delete(index: any) {
    this.vendorWiseList.removeAt(index);
    this.toaster.error("Deleted Successfully")
  }


  vendorPurchaseMaterialList() {
    return this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      workphone:[''],
      Mobile:['']
    });
  }

  get vendorWiseList(): FormArray {
    return (<FormArray>this.studentForm.get('address')) as FormArray;
  }

  addItem() {
    let firstname = this.studentForm.value.firstname
    let city = this.studentForm.value.city
    let street = this.studentForm.value.street
    let check = this.studentForm.value.present
    let count = this.studentForm.value.country

    this.order = this.vendorPurchaseMaterialList();
    this.vendorWiseList.push(this.order);
    console.log(this.vendorWiseList.controls)


  }
  onSubmit() {
    this.Submitted = true;
  }



}
