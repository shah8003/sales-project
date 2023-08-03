import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Usman","Naveed","usman.naveed@gmail.com",50000),
    new SalesPerson("Waqar","Younas","waqar.younas@@gmail.com",40000),
    new SalesPerson("Shahroz","Amir","shahroz.amir@gmail.com",90000),
    new SalesPerson("Haris","Ahmed","haris.ahmed@gmail.com",60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
