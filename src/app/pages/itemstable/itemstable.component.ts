import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items/items.service';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-itemstable',
  templateUrl: './itemstable.component.html',
  styleUrls: ['./itemstable.component.scss']
})
export class ItemstableComponent implements OnInit {
  bedid:any
  list: any = [];
subject:any
acceptSubmitted = false;
bedObj: any = {};
unittype: any = [];
result: any;




  constructor(
    private service:ItemsService ,
    private route: ActivatedRoute,

  ){
    // this.bedid = this.route.snapshot.paramMap.get('id');
    // if (this.bedid != null) {
    //   this.editBatch(this.list, this.subject);
    //   this.acceptSubmitted = true;
    // }
  }
  ngOnInit(): void {
    this.getunitList();
  }
  getunitList() {
    this.service
      .getByitems()
      .subscribe(
        (responce) => {
          this.unittype = responce;
          this.unittype = this.unittype.data;
        });
       
        
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
  }
 
}
