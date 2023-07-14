import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  formData = {
    name: '',
    email: '',
    topic: '',
    description: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    this.goToHome();
  }

  cancelForm() {
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
