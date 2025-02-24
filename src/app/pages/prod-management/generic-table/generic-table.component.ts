import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-table',
  imports: [CommonModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent implements OnInit {
  @Input() headers: string[] = []; // Array of objects defining column headers and keys
  @Input() data: any[] = []; // Array of objects with the data

  @Output() sortedDataChange = new EventEmitter<any[]>();

  sortedData: any[] = [];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit() {
    this.sortedData = [...this.data]; // Initialize with unsorted data
  }

  sortData(columnKey: string) {
    // Toggle sort direction
    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortColumn = columnKey;

    // Sort data
    this.sortedData.sort((a, b) => {
      const valueA = a[columnKey];
      const valueB = b[columnKey];

      // Handle different data types (string and number)
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      }

      return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
    });

    // Emit the sorted data to the parent component
    this.sortedDataChange.emit(this.sortedData);
  }

  objectKeys(data: any) {
    return Object.keys(data)
  }
}
