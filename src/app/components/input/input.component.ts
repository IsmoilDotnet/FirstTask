import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() inputData: any;
  @Output() outputEvent: EventEmitter<any> = new EventEmitter<any>();
  
  // Emit event
  this.outputEvent.emit(data);
}
