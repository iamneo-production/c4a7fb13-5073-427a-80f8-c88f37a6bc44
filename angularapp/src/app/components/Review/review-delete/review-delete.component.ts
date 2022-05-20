import { Component, OnInit } from '@angular/core';
import { ReviewServiceService } from 'src/app/services/review-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-delete',
  templateUrl: './review-delete.component.html',
  styleUrls: ['./review-delete.component.css']
})
export class ReviewDeleteComponent implements OnInit {
  id: string;
  constructor(private reviewservice: ReviewServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reviewservice.deleteReview(this.id)
      .subscribe(
        (res) => {
          console.log(res);

          Swal.fire('Success', 'Review is successfully deleted ', 'success');
          this.goToReviewList();

        },
        (err) => {
          console.log(err);
        });

  }
  goToReviewList() {
    this.router.navigate(['customer/getReview', this.id]);
  }

}
