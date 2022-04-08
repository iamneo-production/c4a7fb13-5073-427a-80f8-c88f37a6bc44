import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    console.log("clicked dashboard");
    this.display = !this.display;
  }

}
