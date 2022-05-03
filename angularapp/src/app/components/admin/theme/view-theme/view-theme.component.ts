import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ThemeModel } from 'src/app/models/ThemeModel';
import {ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-view-theme',
  templateUrl: './view-theme.component.html',
  styleUrls: ['./view-theme.component.css']
})
export class ViewThemeComponent implements OnInit {

  id: string ='';
  theme: ThemeModel;
  constructor(private route: ActivatedRoute, private themeservice: ThemeServiceService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

   
    this.themeservice.getTheme(this.id).subscribe( (data : any) => {
      console.log(data);
      this.theme = data;
    });
  }

}
