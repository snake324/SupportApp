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

  goToListSupportRequest() {
    const queryParams = {
    name: this.formData.name,
    email: this.formData.email,
    topic: this.formData.topic,
    description: this.formData.description
  };
    this.router.navigate([''], { queryParams });
  }

  cancelForm() {
    this.resetForm();
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

