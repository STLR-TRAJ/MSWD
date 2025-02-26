import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="variant"
      (click)="onClick.emit()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      padding: 8px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-size: 14px;
    }
    
    .primary {
      background-color: #007bff;
      color: white;
    }
    
    .secondary {
      background-color: #6c757d;
      color: white;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output() onClick = new EventEmitter<void>();
} 