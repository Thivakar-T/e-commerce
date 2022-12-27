import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UnitService } from './unit.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  unittype: any = [];
  submitted = false;
  error = '';
  result: any;
  id: any;
  bedid: any;
  editdata: any;
  bedObj: any = {};
  list: any = [];
  acceptSubmitted = false;
  master: any = [];
  subject: any
  unitform: FormGroup | any;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private service: UnitService,
    private toaster:ToastrService
  ) {
    this.bedid = this.route.snapshot.paramMap.get('id');
    if (this.bedid != null) {
      this.editBatch(this.list, this.subject);
      this.acceptSubmitted = true;
    }
  }
  
 

  ngOnInit(): void {
    this.unitform = this.formBuilder.group({
      description: ['', Validators.required],
      name: ['', Validators.required],
      id: [''],
    });
    this.getunitList();
  }

  openBooking(subject: any) {
    this.modalService.open(subject);
  }

  getunitList() {
    this.service
      .getByunit()
      .subscribe(
        (responce) => {
          this.unittype = responce;
          this.unittype = this.unittype.data;
        });
       
        
  }

  getunittype(model: any) {
    if (this.bedObj.id) {
      this.unitform.value.id = this.bedObj.id;
    this.toaster.success("Edited Successful")
      this.service.updatelist(this.unitform.value)
        .subscribe(
          (res) => {
            this.result = res;
            this.getunitList();
            model.dismiss('Cross click');
          });
    }
    else {

      let  name=this.unitform.value.name
      let description=this.unitform.value.description
      if(name&&description){
      this.submitted = true;
      this.service.createunit(this.unitform.value).subscribe(
        (responce) => {
          this.result = responce;
          model.dismiss('Cross click');
          this.getunitList()
          this.router.navigateByUrl('/pages/bed-type');
          this.toaster.success("Your Data is Created")
        }
        
      );
    }
    else{
      this.toaster.error("You must enter all values")

    }
   
    }
  }

  editBatch(master: any, subject: any) {
    this.service
      .editgetByunit(master.id).subscribe(
        (res) => {
          this.bedObj = res.data;
        }
      );
    this.modalService.open(subject, { size: 'md' });
  }

  delete(id: any) {
    if (confirm('Do you want romove data')) {
      this.service.deleteData(id).subscribe(
        (responce) => {
          this.getunitList();
          this.result = responce;
        },
      );
    }
    this.toaster.error("Deleted Successfully")
  }
 
}



