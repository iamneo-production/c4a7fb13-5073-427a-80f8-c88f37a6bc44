import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeModel } from 'src/app/models/ThemeModel';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  themes: ThemeModel[] = [];
  ths: ThemeModel[];
  searchValue: string;
  constructor(private themeservice: ThemeServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.gotothemes()
  }
  private gotothemes() {
    this.themeservice.getThemeList().subscribe((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {

        this.themes.push(data[i]);
      }
      this.ths = this.themes;
      console.log(this.themes);
    })

  }

  searchItem(e: any) {
    if (this.searchValue.length == 0) {
      this.gotothemes();
    }
    else {
      this.themes = this.ths;
      this.themes = this.themes.filter((item) => {
        if (item.themeName.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1) {
          return true;
        }
        else {
          return false;
        }
      })
    }
  }
  ViewTheme(id: string) {
    console.log("in admin/Themedetails");
    this.router.navigate(['admin/viewTheme', id]);
  }

  EditTheme(id: string) {
    this.router.navigate(['admin/editTheme', id]);
  }
  DeleteTheme(id: string) {
    this.router.navigate(['admin/deleteTheme', id]);
  }
  AddTheme() {
    this.router.navigate(['admin/addTheme']);
  }

}
