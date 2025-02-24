import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-action-block',
  imports: [],
  templateUrl: './inventory-action-block.component.html',
  styleUrl: './inventory-action-block.component.scss'
})
export class InventoryActionBlockComponent {
  @Input() iconPath : string = ''
  @Input() buttonText : string = ''
}
