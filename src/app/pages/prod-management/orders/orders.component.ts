import { Component, OnInit } from '@angular/core';
import { NavBarSellerComponent } from '../nav-bar-seller/nav-bar-seller.component';
import { GenericTableComponent } from '../generic-table/generic-table.component';

@Component({
  selector: 'app-orders',
  imports: [NavBarSellerComponent, GenericTableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
  myUserName : string = "Thanh"

  sortedOrdersData: any[] = [];

  ngOnInit() {
    // Initialize with unsorted data
    this.sortedOrdersData = [...this.ordersData];
  }

  onSortedDataChange(sortedData: any[]) {
    // Update the local data with the sorted version
    this.sortedOrdersData = sortedData;
    // console.log(this.sortedInventoryData)
  }

  ordersHeader = ["id", "name" , "amount", "date", "status", "delivery"]
  ordersData = [
    {id: "1234", name: "Thanh", amount: 10000, date: "02-11-2025", status: "Paid", delivery: "Delivered"},
    {id: "245", name: "Thnh", amount: 1, date: "03-11-2025", status: "Paid", delivery: "Packed"},
    {id: "3654", name: "Tanh", amount: 2, date: "02-11-2025", status: "Unpaid", delivery: "Not shipped"},
    {id: "433", name: "Hanh", amount: 3, date: "02-11-2025", status: "Paid", delivery: "On the way"},
    {id: "52", name: "Thah", amount: 4, date: "02-11-2025", status: "Unpaid", delivery: "Delivered"},
    {id: "665", name: "Tanh", amount: 42, date: "02-11-2025", status: "Unpaid", delivery: "Delivered"},
  ]
}
