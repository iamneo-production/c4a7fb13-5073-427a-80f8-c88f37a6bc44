import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';

import { AllServiceService } from 'src/app/services/all-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {

  id: string='';
  admin!: Customer;
  constructor(private _allservice: AllServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this._allservice.getAdminByEmail(this.id).subscribe((data : any ) => {
      console.log("get get");
      this.admin = data;
     
    }, (error : any ) => console.log(error));
  }
  

  onSubmit(){
    this._allservice.updateAdmin(this.id, this.admin).subscribe( (data : any ) =>{
      console.log("edit edit");
      this.admin=data;
     
    
      this.goToAdminDashboard();
      
    }
    , (error : any) => console.log(error));
  }

  goToAdminDashboard(){
    this.router.navigate(['admin/dashboard']);
  }


}
