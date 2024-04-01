import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterLink,
     RouterOutlet,
     PersonTableComponent,
     EventBindExampleComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
