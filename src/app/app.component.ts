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

  person = {
    givenName: 'Konstantinos',
    surName: 'Batsikas',
    age: 0x28,
    email: 'difoe@aueb.gr',
  };
}
