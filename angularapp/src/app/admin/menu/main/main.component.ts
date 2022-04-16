import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItems } from '../../../models/FoodItems';
import { AdminServiceService } from '../../../services/admin/admin-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	foodItems:FoodItems[]=[];
    searchValue: String = "";

	constructor(private _service:AdminServiceService,private _router:Router) { }

    ngOnInit(): void {
		this.getAllFoodItems();
	}

	getAllFoodItems(){
		this._service.getAllFoodItems().subscribe(
			(data:FoodItems[])=>{
				for(let i=0;i<data.length;i++){
					data[i].image = "data:image/jpeg;base64," + data[i].image;
					this.foodItems.push(data[i]);
				}
				console.log(this.foodItems);
			},
			(error:any)=>{
			console.log(error);
			})
	}

	searchItem(e:any){
		if(this.searchValue.length == 0){
			this.getAllFoodItems();
		}
		else{
			this.foodItems = this.foodItems.filter((item)=>{
				if(item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1){
					return true;
				}
				else{
					return false;
				}
			})
		}
	}

	updateItem(id: String){
		console.log(id);
		this._router.navigate(['admin/menu/'+id]);
	}

	addItem(){
		this._router.navigate(['admin/menu/add']);
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
