
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/LoginModel';
import { RegisterModel } from './../models/RegisterModel';
import { Observable  } from 'rxjs';
import { Auth } from '../models/Auth';


import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  private _url:string = 'https://8080-cebfaaeddedefffffdbecbfeeecafdedbbbfbfdceaf.examlyiopb.examly.io/' ;
  constructor(private _httpClient:HttpClient) { }
  //Id:string='';
  doLogin(loginModel:LoginModel): Observable<any> {
    //this.Id=loginModel.email;
    console.log(`Model: ${loginModel.email} ${loginModel.password}`);
    return this._httpClient.post(this._url+'login',  loginModel,{ responseType: 'text' });
  }
  addCustomer(regModel: RegisterModel): Observable<any> {
    console.log(`Model: ${regModel}`);
    return this._httpClient.post(this._url+'addCustomer', regModel,{ responseType: 'text' });
  }
  addAdmin(regModel: RegisterModel): Observable<any> {
    
    console.log(`Model: ${regModel}`);
    console.log(regModel);
    return this._httpClient.post(this._url+'addAdmin',  regModel , { responseType: 'text' });
  }

  getCustomerList(): Observable<Auth[]>   {
    
    console.log("In customerlist Services");
    return this._httpClient.get<Auth[]>(`${this._url}`+'admin/getCustomer');
  }
  getCustomerByEmail(id: string): Observable<Customer> {
    
    console.log("get customer services");
    return this._httpClient.get<Customer>(`${this._url}admin/getCustomer/${id}`);
  }

 updateCustomer(id: string, customer: Customer): Observable<Object>{
    console.log("update customer");
    console.log(id);
    console.log(customer);
    return this._httpClient.post(`${this._url}customer/editCustomer/${id}`, customer);
  }

  deleteCustomer(id: string):Observable<any>{
    console.log("delete");
     return this._httpClient.get(`${this._url}admin//deleteCustomer/${id}`);
  }
  getAdminByEmail(id: string): Observable<Customer> {
    
    console.log("get customer services");
    return this._httpClient.get<Customer>(`${this._url}admin/getAdmin/${id}`);
  }

 updateAdmin(id: string, customer: Customer): Observable<Object>{
    console.log("update customer");
    console.log(id);
    console.log(customer);
    return this._httpClient.post(`${this._url}admin/editAdmin/${id}`, customer);
  }
  //AccessProfile()
    async AccessProfile() :Promise<string>{
   
   // return this.Id;
     console.log("token");
     return  await this._httpClient.get(this._url+'gettoken' , { responseType: 'text'}).toPromise();
    //return this._httpClient.get(this._url+'gettoken', { responseType: 'text' });
     
  }
  
  async SignoutProfile(): Promise<string>
  {
    console.log("signout null");
    return await  this._httpClient.get(this._url+'signout', { responseType: 'text' }).toPromise();

  }
  

  
}
