import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-support-request',
  templateUrl: './list-support-request.component.html',
  styleUrls: ['./list-support-request.component.scss']
})
export class ListSupportRequestComponent {

  formData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.formData = params;
    });
  }

}
