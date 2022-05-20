import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { ThemeModel } from './../../../../models/ThemeModel';
import { AllServiceService } from 'src/app/services/all-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-theme',
  templateUrl: './update-theme.component.html',
  styleUrls: ['./update-theme.component.css']
})
export class UpdateThemeComponent implements OnInit {




  themeModel: ThemeModel;
  themeId: string = '';
  id: string = '';

  constructor(private themeService: ThemeServiceService, private _allservice: AllServiceService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.themeId = this.route.snapshot.params['id'];
    this._allservice.AccessProfile().then((data: any) => {
      console.log("get get");
      this.id = data;


    }, (error: any) => console.log(error));
    this.themeService.getTheme(this.themeId).subscribe((data: any) => {
      console.log("get get");
      this.themeModel = data;


    }, (error: any) => console.log(error));

  }



  updateTheme() {
    this.themeService.updateTheme(this.themeId, this.themeModel)
      .subscribe(
        (res) => {
          console.log("Updated Theme: ", res);
          this.gotoThemeList();
        },
        (err) => {
          console.log(err);
        });
    // this.ngbModelRef.close();
  }
  gotoThemeList() {
    this.router.navigate(['admin/getTheme']);
  }
}
