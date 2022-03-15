import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { AllServiceService } from './../../../services/all-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _allService:AllServiceService) { }

  regModel: RegisterModel = {
    name: '',
    phoneNo: '',
    address: '',
    email: '',
    password: ''
  }

  btnClick(e:any){
    this._allService.addCustomer(this.regModel)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }
  
  ngOnInit(): void {
  }

}
