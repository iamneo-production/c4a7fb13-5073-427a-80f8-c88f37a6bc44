import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addon } from './addon';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AddonService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getAddons(): Observable<Addon[]> {
    return this.http.get<Addon[]>(`${this.apiServerUrl}/addon/all`);
  }

  public addAddon(addon: Addon): Observable<Addon> {
    return this.http.post<Addon>(`${this.apiServerUrl}/addon/add`, addon);
  }

  public updateAddon(addon: Addon): Observable<Addon> {
    return this.http.put<Addon>(`${this.apiServerUrl}/addon/update`, addon);
  }

  public deleteAddon(addonId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/addon/delete/${addonId}`);
  }
}
