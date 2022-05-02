import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllServiceService } from 'src/app/services/all-service.service';
import { LoginModel } from './../../../models/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  isLoad = false;

  loginModel:LoginModel = {
    email: '',
    password: ''
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal, private _allService: AllServiceService,private _router:Router) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    
  }

  btnClick(e:any) {
    this._allService.doLogin(this.loginModel)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          if(err.status === 200){
            let res = err.error.text;
            switch (res.split(" ")[1]) {
              case "ADMIN":
                this._router.navigate(['admin/']);
                break;
              case "CUSTOMER":
                console.log("Customer");
                break;
              default:  
                console.log("Default");
                break;
            }
          }
          else{
            console.log(err.error);
          }
        });
  }


  ngOnInit() {
  }

}
