import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://6447a3d350c25337442a7236.mockapi.io/';
  constructor(private httpClient:HttpClient) { }

  public header(){
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    return headers;
  }

  public get(endPoint:string):Observable<any>{
    let apiPath = `${this.apiUrl}/`;
    return this.httpClient.get(apiPath,{headers:this.header()});
  }

  getProducts(){
    return this.get(`products`);
  }
}
