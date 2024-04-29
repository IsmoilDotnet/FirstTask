import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputComponent } from "./components/output/output.component";
import { InputComponent } from "./components/input/input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, OutputComponent, InputComponent]
})
export class AppComponent {
  title = 'FirstTask';
}
