import { AddOns } from './../../../models/AddOns';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	addOns:AddOns[] = []
	constructor(private _adminService:AdminServiceService,private _router:Router) { }

	ngOnInit(): void {
		this._adminService.getAllAddOns()
			.subscribe(
				(res) => {
					this.addOns = res;
				},
				(err) => {
					console.log(err);
				}
			)
	}

	onSelect(addOns:AddOns){
		this._router.navigate(['/admin/theme/add',addOns.id])
	}

}
