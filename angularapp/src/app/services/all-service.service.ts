import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';
import { RegisterModel } from './../models/RegisterModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  private _url:String = 'http://localhost:8080/api/';
  constructor(private _httpClient:HttpClient) { }

  doLogin(loginModel:LoginModel): Observable<any> {
    console.log(`Model: ${loginModel.email} ${loginModel.password}`);
    return this._httpClient.post(this._url+'login',loginModel);
  }

  addCustomer(regModel: RegisterModel): Observable<any> {
    console.log(`Model: ${regModel}`);
    return this._httpClient.post(this._url+'addCustomer',regModel);
  }

}
