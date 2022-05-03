import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';

import { AllServiceService } from 'src/app/services/all-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  id: string='';
  customer!: Customer;
  constructor(private _allservice: AllServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this._allservice.getCustomerByEmail(this.id).subscribe((data : any ) => {
      console.log("get get");
      this.customer = data;
     // console.log(this.customer);
     
    }, (error : any ) => console.log(error));
  }
  

  onSubmit(){
    this._allservice.updateCustomer(this.id, this.customer).subscribe( (data : any ) =>{
      console.log("edit edit");
      this.customer=data;
      //console.log(data);
    
      this.gotoCustomerDashboard();
      
    }
    , (error : any) => console.log(error));
  }

  gotoCustomerDashboard(){
    this.router.navigate(['customer/dashboard']);
  }

}
