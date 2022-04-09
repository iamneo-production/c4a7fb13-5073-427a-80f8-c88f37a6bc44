import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  onPress(e:any) {
    switch (e.target.outerText) {
      case "Theme":
        this._router.navigate(['admin/theme']);
        break;
      case "Menu":
        this._router.navigate(['admin/menu']);
        break;
      case "Add ons":
        console.log("Add ons Pressed");
        break;
      case "Logout":
        console.log("Logout Pressed");
        break;
      default:
        console.log("Default Pressed");
        break;
    }
  }

}
