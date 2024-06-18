import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.router.navigate(['/paginaInicialAdmin']);
  }
}
