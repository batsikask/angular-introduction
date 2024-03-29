import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Konstantinos';

  person = {
    givenName: 'Konstantinos',
    surName: 'Batsikas',
    age: 0x28,
    email: 'difoe@aueb.gr',
  };
}
