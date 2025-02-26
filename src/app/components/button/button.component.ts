import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,  // Marking this as a standalone component
  template: `<button>Click Me</button>`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = 'Click Me';
  @Input() color: string = 'blue';
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}

