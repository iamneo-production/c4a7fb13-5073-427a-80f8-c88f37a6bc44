import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllServiceService } from 'src/app/services/all-service.service';
import { LoginModel } from './../../../models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent{
  isLoad = false;

  loginModel:LoginModel = {
    email: '',
    password: ''
  }

  constructor(config: NgbModalConfig, private modalService: NgbModal, private _allService: AllServiceService) {
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
            console.log(err.error.text);
          }
          else{
            console.log(err.error);
          }
        });
  }


  ngOnInit() {
  }

}
