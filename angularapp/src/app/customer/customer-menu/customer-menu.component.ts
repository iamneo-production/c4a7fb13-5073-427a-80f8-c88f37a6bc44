import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin/admin-service.service';
import { FoodItems } from '../../models/FoodItems';


@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {

  foodItems:FoodItems[]=[];
  searchValue: String = "";

  constructor(private _service:AdminServiceService) { }

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

}
