import { Component, OnInit } from '@angular/core';

import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { AllServiceService } from 'src/app/services/all-service.service';

import Swal from 'sweetalert2';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {


   id:string='';
  constructor( private _allservice :AllServiceService ,   private themeService:ThemeServiceService , private matSnackBar:MatSnackBar , private router :Router) {}
  themeModel={
    themeName: '',
    imageUrl: '',
    photographerDetails: '',
    videographerDetails: '',
    returnGift: '',
    themeCost: 0,
    themeDescription: ''
  }


  

  sendRequest(){

    if(this.themeModel.themeName=='' || this.themeModel.themeName==null){
      this.matSnackBar.open("Name is required !",'',{
        duration:3000,
        panelClass: 'custom-css-class'
      });
      return;
    }
    
    if(this.themeModel.imageUrl=='' ||  this.themeModel.imageUrl==null ){
      this.matSnackBar.open(" ImageUrl required !",'',{
        duration:3000,
        panelClass: 'custom-css-class'
      });
      return;
    }
    
    
    
    if(this.themeModel.photographerDetails=='' || this.themeModel.photographerDetails==null){
      this.matSnackBar.open("photographerDetails is required !",'',{
        duration:3000,
        panelClass: 'custom-css-class'
      });
      return;
    }
    
    
    
     if(this.themeModel.videographerDetails=='' || this.themeModel.videographerDetails==null){
      this.matSnackBar.open("Password is required !",'',{
        duration:3000,
        panelClass: 'custom-css-class'
      });
      return;
    }
    
    if(this.themeModel.returnGift=='' || this.themeModel.returnGift==null){
      this.matSnackBar.open("ReturnGift is required !",'',{
        duration:3000,
        panelClass: 'custom-css-class'
      });
      return;
    }
    
    if(this.themeModel.themeCost==0 ){
      this.matSnackBar.open("ThemeCost is required !",'',{
        duration:3000,
        panelClass: 'custom-css-class'
      });
      return;
    }


      
      this.themeService.addTheme(this.themeModel)
        .subscribe(
          (res) => {
            console.log(res);
           
        this.goToThemeList();
        Swal.fire('Success','Theme is added','success');
          },
          (err) => {
            console.log(err);
            this.matSnackBar.open('Something went wrong !!','',{
              duration:3000,
              panelClass: 'custom-css-class'
          });
        }
        )
  }

  

  ngOnInit(): void {
    //this.id=this._allservice.AccessProfile();
    this._allservice.AccessProfile().then((data : any) => {
      console.log("get get");
      this.id = data;
     // console.log(this.admin);
     
    }, (error : any ) => console.log(error));
  }
  goToThemeList()
  {
    this.router.navigate(['admin/getTheme']);
  }

}

  


