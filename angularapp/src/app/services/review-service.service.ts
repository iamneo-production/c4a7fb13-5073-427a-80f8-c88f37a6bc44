import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reviewModel } from './../models/reviewModel';
import { review } from './../models/review';
@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {


  private _url: string = 'http://localhost:8080/';
  constructor(private _httpClient: HttpClient) { }
  getReviewList(): Observable<reviewModel[]> {

    console.log("In themelist Services");
    return this._httpClient.get<reviewModel[]>(`${this._url}` + 'getReview');
  }
  addReview(rev: review): Observable<any> {
    console.log("In themelist Services");
    console.log(`Model:  ${rev.reviewDes}`);
    console.log("In themelist Services");
    return this._httpClient.post(this._url + 'customer/addReview', rev);
  }

  deleteReview(Id: string): Observable<any> {
    console.log(`"mail Id: " ${Id}`);
    return this._httpClient.get(this._url + "customer/deleteReview/" + Id);
  }

  getReview(id: string) {
    return this._httpClient.get<reviewModel>(this._url + "customer/getReview/" + id);
  }

  updateReview(id: string, rev: reviewModel): Observable<any> {
    console.log("Inside Service: ", id, rev)
    return this._httpClient.post(this._url + "customer/editReview/" + id, rev);
  }


}
