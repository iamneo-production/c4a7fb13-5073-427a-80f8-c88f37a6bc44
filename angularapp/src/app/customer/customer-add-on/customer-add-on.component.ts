import { Component, OnInit } from '@angular/core';
import { Addon } from '../../addon';
import { AddonService } from '../../addon.service';

@Component({
  selector: 'app-customer-add-on',
  templateUrl: './customer-add-on.component.html',
  styleUrls: ['./customer-add-on.component.css']
})
export class CustomerAddOnComponent implements OnInit {

  addons: Addon[]= [];

  constructor(private _service:AddonService) { }

  ngOnInit(): void {
    this.getAllAddOns();
  }

  getAllAddOns(){
    this._service.getAddons().subscribe(
      data=>{
        this.addons=data;
      },
      error=>{
        console.log(error);
      }
  )}

}
