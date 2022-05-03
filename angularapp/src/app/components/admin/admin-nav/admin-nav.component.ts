import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AllServiceService } from 'src/app/services/all-service.service';



@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
 id :string='';
  constructor(private route: ActivatedRoute , private router: Router , private _allservice : AllServiceService) {  }

  async ngOnInit(): Promise<void>  {
    this.id= <string>await  this._allservice.AccessProfile();
    
    console.log("ngonit");
  
    console.log("enter");
    console.log(this.id);
    if(this.id=='' || this.id==null || this.id==undefined)
    {
      this.router.navigate(['/login']);
    }
  }
   
  async signout()
  {
   
    await this._allservice.SignoutProfile().then((data : any) => {
    console.log("get get");
    this.id = data;
    console.log(this.id);
    console.log(data);
   
  }, (error : any ) => console.log(error));
    this.router.navigate(['login']);
  }
  manageAcc(id:string)
  {
    
    this.router.navigate(['admin/editAdmin' , id]);
  }
  goToManageCustomer()
  {
    this.router.navigate(['admin/getCustomer' ]);
  }
  goToManageTheme()
  {
    this.router.navigate(['admin/getTheme']);
  }
  

}
