import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private client: HttpClient) { }

  postRequest(url: string): Observable<any> {
    return this.client.post(url, null, {
      headers: new HttpHeaders()
    });
  }
}
