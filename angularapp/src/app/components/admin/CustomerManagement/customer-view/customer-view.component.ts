import { Component, OnInit } from  '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { ActivatedRoute } from '@angular/router';
import { AllServiceService } from 'src/app/services/all-service.service';


@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  id: string ='';
  customer: Customer;
  constructor(private route: ActivatedRoute, private _allservice: AllServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

   
    this._allservice.getCustomerByEmail(this.id).subscribe( (data : any) => {
      console.log(data);
      this.customer = data;
    });
  }
}
