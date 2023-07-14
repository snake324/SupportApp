import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportFormApiService {

  private apiUrl = 'URL_DEL_API';

  constructor(private http: HttpClient) {}

  getSupportRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/support-requests`);
  }
}
