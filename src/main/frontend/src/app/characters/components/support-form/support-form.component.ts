import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-form',
  templateUrl: './support-form.component.html',
  styleUrls: ['./support-form.component.scss']
})
export class SupportFormComponent {
  formData = {
    name: '',
    email: '',
    topic: '',
    description: ''
  };

  constructor(private router: Router) {}

  submitForm() {
    this.router.navigate(['']);
  }

  cancelForm() {
    this.resetForm();
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['']);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      topic: '',
      description: ''
    };
  }

}

