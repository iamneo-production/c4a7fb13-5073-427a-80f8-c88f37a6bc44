import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AllServiceService } from 'src/app/services/all-service.service';
import { LoginModel } from '../../../models/LoginModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent {
  isLoad = false;

  loginModel: LoginModel = {
    email: '',
    password: ''
  }

  constructor(config: NgbModalConfig, private _allService: AllServiceService, private matsnackbar: MatSnackBar, private router: Router) {

    config.backdrop = 'static';
    config.keyboard = false;

  }

  btnClick(e: any) {

    if (this.loginModel.email == '' || this.loginModel.email == null) {
      this.matsnackbar.open("Email is required !", '', {
        duration: 3000,
        panelClass: 'custom-css-class'
      });
      return;
    }
    else if (this.loginModel.password == '' || this.loginModel.password == null) {
      this.matsnackbar.open("password is required !", '', {
        duration: 3000,
        panelClass: 'custom-css-class'
      });
      return;

    }
    else {
      this._allService.doLogin({ ...this.loginModel }).subscribe(
        (res: any) => {
          console.log(res);
          Swal.fire('Success', 'User "' + this.loginModel.email + '" is successfully logged in ', 'success');
          if (res == "ADMIN") {
            console.log("Admin");
            this.goToAdminDashboard();
          }
          else {
            console.log("Customer");
            this.goToCustomerDashboard()
          }
        },
        (err: any) => {


          console.log(err.error)

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error
          });


        }
      )
    }
  }
  goToCustomerDashboard() {
    console.log("User");
    this.router.navigate(['customer/dashboard']);
  }
  goToAdminDashboard() {
    console.log("Admin");
    this.router.navigate(['admin/dashboard']);
  }


  ngOnInit() {
  }

}
