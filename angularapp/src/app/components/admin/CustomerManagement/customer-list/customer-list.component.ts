import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/Auth';

import { AllServiceService } from 'src/app/services/all-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  //id:string='';
  customers : Auth[]=[] ;

  constructor(private _allService: AllServiceService ,private route : ActivatedRoute ,
    private router: Router) {}

  ngOnInit(): void {
    //this.id=this.route.snapshot.params['id'];
    this.getCustomers();
  }
  private gets()
  {

    console.log(this.customers);
    console.log(this.customers[0].email);
  
    
  }
  private getCustomers(){
    this._allService.getCustomerList().subscribe((data ) => {
      this.customers = data;
      console.log(data);
      console.log(this.customers);
      console.log("success");
      this.gets();
      
      
    })
    
  }

  CustomerDetails(id: string){
    console.log("in admin/customerdetails");
    this.router.navigate(['admin/viewCustomer', id]);
  }

 /* UpdateCustomer(id: string){
    this.router.navigate(['admin/editCustomer', id]);
  }*/
  DeleteCustomer(id: string)
  {
    this.router.navigate(['admin/deleteCustomer', id]);
  }

 /*DeleteCustomer(id: string){
    this._allService.deleteCustomer(id).subscribe( (data :any) => {
      console.log(data);
      this.getCustomers();
    })
  }*/

}
