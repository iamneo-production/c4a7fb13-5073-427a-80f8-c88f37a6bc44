import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { reviewModel } from 'src/app/models/reviewModel';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review-update',
  templateUrl: './review-update.component.html',
  styleUrls: ['./review-update.component.css']
})
export class ReviewUpdateComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private reviewservice: ReviewServiceService) { }
  review: reviewModel;

  id: string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.reviewservice.getReview(this.id).subscribe((data: any) => {
      console.log("get get");
      console.log(this.id);
      console.log(data);
      console.log();
      this.review = data;
      console.log(this.review);;


    }, (error: any) => console.log(error));
  }


  updateReview() {
    var date = new Date();
    this.review.dateTime = date.toLocaleString();
    this.reviewservice.updateReview(this.id, this.review)
      .subscribe(
        (res) => {
          console.log("Updated Review: ", res);
          console.log(res);
          this.gotoReviewList();
          Swal.fire('Success', 'Thank You For Your Feedback', 'success');
        },
        (err) => {
          console.log(err);
        });

  }
  gotoReviewList() {
    this.router.navigate(['customer/getReview', this.id]);
  }

}
