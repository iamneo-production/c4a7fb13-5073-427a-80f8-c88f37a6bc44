import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FoodItems } from 'src/app/models/FoodItems';
import { FoodServiceService } from 'src/app/services/food-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  foodItem: FoodItems = {
    id: "",
    name: "",
    category: "",
    cost: 1,
    image: null
    
  }
  id: String | null = ""
  categories: String[] = ["VEG", "NONVEG", "BEVERAGE"]

  constructor(private _route: ActivatedRoute, private _service: FoodServiceService,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if (this.id !== "add" && this.id !== null) {
      this._service.getFoodItemById(this.id).subscribe(
        (data: FoodItems) => {
          console.log(data);
          this.foodItem = data;
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
  }

  onSubmit() {
    if (this.id === "add") {
      this._service.addFoodItem(this.foodItem).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/admin/menu']);
          Swal.fire('Success', 'FoodMenu is added', 'success');
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
    else {
      this._service.updateFoodItem(this.foodItem).subscribe(
        (data: any) => {
          console.log(data);
          this._router.navigate(['/admin/menu']);
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
  }

  onChangeFile(e: any) {
    // Convert image to byte array
    const reader = new FileReader();
    reader.onload = () => {
      let temp = reader.result;
      if (temp) {
        this.foodItem.image = temp.slice(temp.toString().indexOf(',') + 1);
      }
    }
    if (e.target.files && e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }
  }

}
