import { Component, OnInit } from '@angular/core';

import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { AllServiceService } from 'src/app/services/all-service.service';

import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {



  constructor(private _allservice: AllServiceService, private themeService: ThemeServiceService, private matSnackBar: MatSnackBar, private router: Router) { }
  themeModel = {
    themeName: '',
    imageUrl: '',
    photographerDetails: '',
    videographerDetails: '',
    returnGift: '',
    themeCost: 0,
    themeDescription: '',
    status: false
  }




  sendRequest() {
    this.themeService.addTheme(this.themeModel)
      .subscribe(
        (res) => {
          console.log(res);

          this.goToThemeList();
          Swal.fire('Success', 'Theme is added', 'success');
        },
        (err) => {
          console.log(err);
          this.matSnackBar.open('Something went wrong !!', '', {
            duration: 3000,
            panelClass: 'custom-css-class'
          });
        }
      )
  }



  ngOnInit(): void {
  }
  goToThemeList() {
    this.router.navigate(['admin/getTheme']);
  }

}




