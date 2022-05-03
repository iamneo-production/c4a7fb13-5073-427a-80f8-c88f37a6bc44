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
id:string;
themes:ThemeModel[];
  constructor(private themeservice: ThemeServiceService ,private route : ActivatedRoute ,
    private router: Router) {}

  ngOnInit(): void {
   // this.id=this.route.snapshot.params['id'];
    this.gotothemes()
  }
   private gotothemes(){
    this.themeservice.getThemeList().subscribe((data ) => {
      this.themes = data;
      console.log(data);
      console.log(this.themes);
      console.log("success");
      
      
      
    })

    
  }
  ViewTheme(id: string){
    console.log("in admin/Themedetails");
    this.router.navigate(['admin/viewTheme', id]);
  }

  EditTheme(id: string){
    this.router.navigate(['admin/editTheme', id]);
  }
  DeleteTheme(id: string)
  {
    this.router.navigate(['admin/deleteTheme', id]);
  }
  AddTheme()
  {
    this.router.navigate(['admin/addTheme']);
  }

}
