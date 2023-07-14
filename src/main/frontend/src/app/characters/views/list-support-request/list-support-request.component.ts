import { Component } from '@angular/core';
import { SupportFormApiService } from '../../service/support-form-api.service';

@Component({
  selector: 'app-list-support-request',
  templateUrl: './list-support-request.component.html',
  styleUrls: ['./list-support-request.component.scss']
})
export class ListSupportRequestComponent {

  supportRequests: any[] = [];


  constructor(private supportFormApiService: SupportFormApiService) {}

  ngOnInit() {
    this.getSupportRequests();
  }

  getSupportRequests() {
    this.supportFormApiService.getSupportRequests()
      .subscribe((requests: any[]) => {
        this.supportRequests = requests;
    });
    
  }

}
