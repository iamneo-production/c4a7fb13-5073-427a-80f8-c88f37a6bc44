import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThemeModel } from './../models/ThemeModel';


@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private _url:String = 'http://localhost:8080/admin/';
  constructor(private _httpClient:HttpClient) { }

  addTheme(themeModel:ThemeModel): Observable<any> {
    console.log(`Model: ${themeModel.themeName} ${themeModel.photographerDetails}`);
    return this._httpClient.post(this._url+'addTheme',themeModel);
  }

  deleteTheme(themeId:string){
    console.log(`"Theme Id: " ${themeId}`);
    return this._httpClient.delete(this._url+"deleteTheme/"+themeId)
  }

  getTheme(themeId:string){
    return this._httpClient.get<ThemeModel>(this._url+"getTheme/"+themeId);
  }

  updateTheme(themeId:String,themeModal:ThemeModel){
    console.log("Inside Service: ", themeId, themeModal)
    return this._httpClient.put(this._url+"updateTheme/"+themeId,themeModal);
  }
}
