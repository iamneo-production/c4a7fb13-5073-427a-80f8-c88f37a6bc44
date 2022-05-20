import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { AllServiceService } from './../../../services/all-service.service';
import Swal from 'sweetalert2';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  constructor(private _allService:AllServiceService , private matSnackBar:MatSnackBar , private router:Router) { }

  regModel: RegisterModel = {
    userRole : "2" ,
    name: '',
    phoneNo: '',
    address: '',
    email: '',
    password: ''
  }
  ConfirmPassword:String='';
  
  btnClick(e:any){
//--------

if(this.regModel.userRole=="2" ){
  this.matSnackBar.open("Select your Role First !",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}

if(this.regModel.name=='' || this.regModel.name==null){
  this.matSnackBar.open("Name is required !",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}

if(this.regModel.phoneNo=='' || this.regModel.phoneNo==null){
  this.matSnackBar.open("Mobile Number  is required !",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}
else if(this.regModel.phoneNo.toString().length!=10)
{
  this.matSnackBar.open("Mobile Number  must have 10 digit",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}
else if(!(this.regModel.phoneNo.toString().startsWith("9") || this.regModel.phoneNo.toString().startsWith("8") || this.regModel.phoneNo.toString().startsWith("7") || this.regModel.phoneNo.toString().startsWith("6") ))
{
  this.matSnackBar.open("Mobile Number  is invalid",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}



if(this.regModel.email=='' || this.regModel.email==null){
  this.matSnackBar.open("Email is required !",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}
else if(!this.regModel.email.toString().endsWith('@gmail.com')){
  this.matSnackBar.open("Email is invalid !",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}


 if(this.regModel.password=='' || this.regModel.password==null){
  this.matSnackBar.open("Password is required !",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}

if(this.regModel.password!=this.ConfirmPassword){
  this.matSnackBar.open("Confirm password and Password does Not Match!",'',{
    duration:3000,
    panelClass: 'custom-css-class'
  });
  return;
}


 if(this.regModel.userRole == "1"){
  console.log({...this.regModel});
  console.log(this.regModel.userRole);
  console.log('ready');
  this._allService.addAdmin({...this.regModel}).subscribe(
    (data :any)=>{
      console.log(data);
      Swal.fire('Success', 'Admin "' + this.regModel.email + '" is successfully registered', 'success');
      this.router.navigate(['login']);
    },
    (error :any)=>{
      console.log(error);
      this.matSnackBar.open('Something went wrong !!','',{
        duration:3000,
        panelClass: 'custom-css-class'
      })
    }
  )
}

else{
  this._allService.addCustomer({...this.regModel}).subscribe(
    (data)=>{
      console.log(data);
      Swal.fire('Success', 'User "' + this.regModel.email + '" is successfully registered', 'success');
      this.router.navigate(['login']);
    },
    (err)=>{
      
      console.log(err.error)
              
          Swal.fire({icon: 'error',
          title: 'Oops...',
          text: err.error});
    }
  )
}





//--------



    /*this._allService.addCustomer(this.regModel)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });*/
  }
  
  ngOnInit(): void {
  }

}
