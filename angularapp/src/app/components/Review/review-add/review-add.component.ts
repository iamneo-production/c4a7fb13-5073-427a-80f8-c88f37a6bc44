import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import { review } from 'src/app/models/review';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  rev: review =
    {
      reviewBy: this.route.snapshot.params['id'],
      reviewDes: '',
      dateTime: '',
      rating: ''
    };
  constructor(private reviewservice: ReviewServiceService,
    private router: Router,
    private route: ActivatedRoute, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id'] );
    //this.rev.reviewBy = this.route.snapshot.params['id'];
    //.log(this.rev.reviewBy );
  }
  addReview() {
    var date = new Date();
    this.rev.dateTime = date.toLocaleString();
    console.log(date);
    console.log(this.rev.dateTime);
    this.reviewservice.addReview(this.rev)
      .subscribe(
        (res) => {
          console.log(res);

          this.goToReview();
          Swal.fire('Success', 'Thank You For Your Feedback', 'success');
        },
        (err) => {
          console.log(err);
          this.matSnackBar.open('Something went wrong !!', '', {
            duration: 3000,
            panelClass: 'custom-css-class'
          });
        }
      )
  }
  goToReview() {
    this.router.navigate(['customer/getReview', this.rev.reviewBy]);
  }
}
