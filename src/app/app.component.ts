import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Konstantinos';

  person0 = {
    givenName: 'Konstantinos',
    surName: 'Batsikas',
    age: 0x28,
    email: 'difoe@aueb.gr',
    address: 'Larisa, Greece'
  };

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  }
}
