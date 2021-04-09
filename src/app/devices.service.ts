import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  url: string = 'https://localhost:8080/ajiranet/process?returnFormat=JSON';

  constructor (private http: HttpClient) { }

  sendPostRequest() {
    const headers = new HttpHeaders()
        .set('cache-control', 'no-cache')
        .set('content-type', 'application/json')
        .set('postman-token', 'b408a67d-5f78-54fc-2fb7-00f6e9cefbd1');

    const body = {
        email: 'myemail@xyz.com',
        user_password: 'mypasss',
        token: 'my token'
    }

    return this.http
               .post(this.url, body, { headers: headers })
               .subscribe(res => res);
} 

}
