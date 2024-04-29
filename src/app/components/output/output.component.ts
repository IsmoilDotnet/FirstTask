import { Component, Input } from '@angular/core';
import { InputComponent } from "../input/input.component";

@Component({
    selector: 'app-output',
    standalone: true,
    templateUrl: './output.component.html',
    styleUrl: './output.component.scss',
    imports: [InputComponent]
})
export class OutputComponent {
    @Input() item = '';
    @Input() itemTwo = '';
}
