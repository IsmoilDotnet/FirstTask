import { Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';

export const routes: Routes = [
    {path: 'input', component: InputComponent},
    {path: 'output', component: OutputComponent}
];
