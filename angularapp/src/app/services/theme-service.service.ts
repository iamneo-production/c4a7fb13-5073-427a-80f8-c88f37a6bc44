import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThemeModel } from './../models/ThemeModel';
import { Theme } from './../models/Theme';


@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private _url: string = 'http://localhost:8080/admin/';
  constructor(private _httpClient:HttpClient) { }
  getThemeList(): Observable<ThemeModel[]>   {
    
    console.log("In themelist Services");
    return this._httpClient.get<ThemeModel[]>(`${this._url}`+'getTheme');
  }

  addTheme(themeModel:Theme): Observable<any> {
    console.log(`Model: ${themeModel.themeName} ${themeModel.photographerDetails}`);
    return this._httpClient.post(this._url+'addTheme',themeModel);
  }

  deleteTheme(themeId:string) : Observable<any> {
    console.log(`"Theme Id: " ${themeId}`);
    return this._httpClient.get(this._url+"deleteTheme/"+themeId );
  }

  getTheme(themeId:string){
    return this._httpClient.get<ThemeModel>(this._url+"getTheme/"+themeId);
  }

  updateTheme(themeId:string,themeModal:ThemeModel):Observable<any> {
    console.log("Inside Service: ", themeId, themeModal)
    return this._httpClient.post(this._url+"updateTheme/"+themeId ,themeModal );
  }
}


