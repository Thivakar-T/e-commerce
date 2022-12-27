import { Component } from '@angular/core';
import {AfterViewInit,  ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent  {

  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    {value: 'box', viewValue: 'box'},
    {value: 'cm', viewValue: 'cm'},
    {value: 'ds', viewValue: 'ds'},
    {value: 'g', viewValue: 'g'},
    {value: 'in', viewValue: 'in'},
    {value: 'kg', viewValue: 'kg'},
    {value: 'km', viewValue: 'km'},
    {value: 'lb', viewValue: 'lb'},
    {value: 'mg', viewValue: 'mg'},
    {value: 'ml', viewValue: 'ml'},
    {value: 'm', viewValue: 'm'},
    {value: 'pcs', viewValue: 'pcs'},
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'},
  ];





// /**
//  * @title Data table with sorting, pagination, and filtering.
//  */
// @Component({
//   selector: 'table-overview-example',
//   styleUrls: ['table-overview-example.css'],
//   templateUrl: 'table-overview-example.html',
// })
// export class TableOverviewExample  {
 


  
}

