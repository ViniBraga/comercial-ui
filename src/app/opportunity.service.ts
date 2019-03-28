import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  //apiUrl = 'http://localhost:8080/opportunities';
  apiUrl = 'https://commercial-api.herokuapp.com/opportunities';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get(this.apiUrl);
  }

  add(opportunity: any) {
    return this.httpClient.post(this.apiUrl, opportunity)
  }

  delete(id: number) {
    let uri: String = "/delete/" + id;
    return this.httpClient.get(this.apiUrl + uri);
  }

}
