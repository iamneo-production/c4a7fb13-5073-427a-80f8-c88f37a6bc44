import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItems } from '../../models/FoodItems';

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

  getFoodItemById(id:String | null) : Observable<any>{
    return this._httpClient.get(this._url+`/getFoodItem/${id}`);
  }

  addFoodItem(foodItem:FoodItems) : Observable<any>{
    return this._httpClient.post(this._url+"/addFoodItem",foodItem);
  }

  updateFoodItem(foodItem:FoodItems) : Observable<any>{
    return this._httpClient.put(this._url+"/updateFoodItem",foodItem);
  }

}
