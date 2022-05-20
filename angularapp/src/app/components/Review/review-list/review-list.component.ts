import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { review } from 'src/app/models/review';
import { reviewModel } from 'src/app/models/reviewModel';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  id: string;
  indicator: boolean;
  reviews: reviewModel[];
  constructor(private reviewservice: ReviewServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reviewservice.getReview(this.id).subscribe((data: any) => {
      console.log("get get");
      console.log(this.id);
      console.log(data);
      console.log();
      this.indicator = false;

      // console.log(this.admin);

    }, (error: any) => this.indicator = true
    );
    this.reviewservice.getReviewList().subscribe((data: any) => {
      this.reviews = data;
      console.log(data);
      console.log(this.reviews);
      console.log("success");



    })
  }
  addReview(id: string) {
    this.router.navigate(['customer/addReview', id]);
  }
  deleteReview(id: string) {
    this.router.navigate(['customer/deleteReview', id]);
  }
  editReview(id: string) {
    this.router.navigate(['customer/editReview', id]);
  }



}
