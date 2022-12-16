import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface PeriodicElement {
  index:number,
  Name:string,
  status:string,
  description:string

  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {index:1,Name:'Raj',status:'active',description:'dsfgh'},
  {index:2,Name:'Sanajay',status:'active',description:'mugunthan'},
  {index:3,Name:'Raj',status:'active',description:'dsfgh'},
  {index:4,Name:'Raj',status:'active',description:'dsfgh'},
  {index:5,Name:'Raj',status:'active',description:'dsfgh'},
  {index:6,Name:'Raj',status:'active',description:'dsfgh'},
  {index:7,Name:'Raj',status:'active',description:'dsfgh'},
  {index:8,Name:'Raj',status:'active',description:'dsfgh'},
];

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements AfterViewInit,OnInit {

  groupform!: FormGroup;
  public submitted = false;
  paramId: any;
  grouplist: any;
  studentgrouplist:any
  displayedColumns: string[] = ['index','Name','status','description', 'action'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  service: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.groupform = this.fb.group({
      id: [''],
      Name: ['', Validators.required],
      status:[''],
      description: [''],
    });
   
  }

  ngOnInit(): void {
    // this.get()
  }


  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
       this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onsubmit() {

    this.submitted = true;
   
    console.log(this.groupform.value);
    this.service.Login(this.groupform.value).subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('currentUser', JSON.stringify(response));
          // localStorage.setItem('token', response.data.jwt);
          // localStorage.setItem('role', response.data.role);
        },
        (error: any)=>{
          console.log(error);
  
          
        }
      )
    
    // this.studentgroup.studentgroup(this.groupform.value).subscribe(
    //   res => {
    //     console.log(res)
    //   })
      
  }
  // get() {
  //   this.studentgroup.getstudentgroup().subscribe(
  //     res => {
  //       console.log(res)
  //       this.grouplist = res
  //       this.studentgrouplist =this.grouplist.data
  //       this.dataSource = new MatTableDataSource<any>(this.studentgrouplist);
  //       this.dataSource.paginator = this.paginator;

  //     })
  // }
  // reject(id:any){
  //   alert("data is deleted")
  //   this.studentgroup.deleteData(id).subscribe(
  //     res => {
  //       this.get()
      
  //     })
    
  // }
}





