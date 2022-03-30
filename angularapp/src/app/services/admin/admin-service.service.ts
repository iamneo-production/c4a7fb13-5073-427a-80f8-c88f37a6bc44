import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private _url = "http://localhost:8080/admin";
  constructor(private _httpClient:HttpClient) { }

  getAllFoodItems() : Observable<any>{
    return this._httpClient.get(this._url+"/getAllFoodItem");
  }

  deleteFoodItems(id:String) : Observable<any>{
    return this._httpClient.delete(this._url+"/deleteFoodItem/"+id);
  }

}
