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
}
