import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router) { }
  
  ngOnInit(): void {
    
   
  }
 

}
