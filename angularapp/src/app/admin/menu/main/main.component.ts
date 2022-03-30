import { Component, OnInit } from '@angular/core';
import { FoodItems } from '../../../models/FoodItems';
import { AdminServiceService } from '../../../services/admin/admin-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	foodItems:FoodItems[]=[];
    
	constructor(private _service:AdminServiceService) { }

    ngOnInit(): void {
		this._service.getAllFoodItems().subscribe(
			(data:FoodItems[])=>{
				console.log(data);
				this.foodItems=data;
			},
			(error:any)=>{
			console.log(error);
			})
	}

	updateItem(id: String){
		console.log(id);
	}

	deleteItem(id:String){
		console.log(id);
		this._service.deleteFoodItems(id).subscribe(
			(data:any)=>{
				this.foodItems = data;
			},
			(error:any)=>{
				console.log(error);
			})
	}


}
