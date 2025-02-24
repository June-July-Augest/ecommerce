import { Component, OnInit } from '@angular/core';
import { NavBarSellerComponent } from '../nav-bar-seller/nav-bar-seller.component';
import { InventoryActionBlockComponent } from '../inventory-action-block/inventory-action-block.component';
import { GenericTableComponent } from '../generic-table/generic-table.component';

@Component({
  selector: 'app-inventory',
  imports: [NavBarSellerComponent, InventoryActionBlockComponent, GenericTableComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit {
  myUserName : string = "Thanh"
  sortedInventoryData: any[] = [];

  ngOnInit() {
    // Initialize with unsorted data
    this.sortedInventoryData = [...this.inventoryData];
  }

  onSortedDataChange(sortedData: any[]) {
    // Update the local data with the sorted version
    this.sortedInventoryData = sortedData;
    // console.log(this.sortedInventoryData)
  }

  inventoryHeader = ["id", "location" , "quantity", "status", "type"]
  inventoryData = [
    {id: "1", location: "Warehouse 1", quantity: 100, status: "available", type: "shirt"},
    {id: "2", location: "Warehouse 5", quantity: 1, status: "available", type: "shoes"},
    {id: "3", location: "Warehouse 3", quantity: 34, status: "not available", type: "pants"},
    {id: "4", location: "Warehouse 1", quantity: 5, status: "available", type: "shirt"},
    {id: "5", location: "Warehouse 2", quantity: 666, status: "available", type: "hat"},
    {id: "6", location: "Warehouse 1", quantity: 99, status: "available", type: "hat"},
  ]
}
