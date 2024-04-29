import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutputComponent } from "../output/output.component";

@Component({
    selector: 'app-input',
    standalone: true,
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    imports: [OutputComponent]
})
export class InputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  NewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
