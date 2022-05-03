import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


import { AllServiceService } from 'src/app/services/all-service.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
 id :string='';
  constructor(private _allService: AllServiceService ,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this._allService.deleteCustomer(this.id).subscribe( (res)=> {
      console.log(res);
      Swal.fire('Success','User "'+this.id+'" is successfully deleted ','success');
      this.gotolist();
    },
    (err:any) =>{
      
      console.log(err.error);
    }
    )
  }
  gotolist()
  {
    console.log("return to list");
    this.router.navigate(['admin/getCustomer' ]);
  }

  
}
