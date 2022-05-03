import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllServiceService } from 'src/app/services/all-service.service';
@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {
  id:string='';

  constructor(private route: ActivatedRoute , private router: Router , private _allservice : AllServiceService) { }
  async signout()
  {
    console.log("sin out");
   await this._allservice.SignoutProfile().then((data : any) => {
    console.log("get get");
    this.id = data;
   // console.log(this.admin);
   
  }, (error : any ) => console.log(error));
    this.router.navigate(['login']);
  }
  manageAcc(id:string)
  {
    this.router.navigate(['customer/editCustomer', id]);
  }

  async ngOnInit(): Promise<void> {
  
   /* this._allservice.AccessProfile().then((data : any) => {
      console.log("get get");
      this.id = data;
     // console.log(this.admin);
     
    }, (error : any ) => console.log(error));*/

    this.id= <string>await this._allservice.AccessProfile();
    if(this.id=='' || this.id==null || this.id==undefined)
    {
      this.router.navigate(['/login']);
    }
  }
  

}
