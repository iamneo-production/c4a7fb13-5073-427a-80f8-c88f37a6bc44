import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dashboard: DashboardComponent) { }

  ngOnInit(): void {
  }

  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    console.log("clicked Navbar");
    this.dashboard.onPress();
    this.display = !this.display;
  }

}
