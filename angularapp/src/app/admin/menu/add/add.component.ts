import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodItems } from 'src/app/models/FoodItems';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  foodItem:FoodItems = {
    id:"",
    name:"",
    category:"",
    cost:0,
    image:null
  }
  id:String | null = ""
  categories:String[] = ["VEG","NONVEG","BEVERAGE"] 

  constructor(private _route:ActivatedRoute,private _service:AdminServiceService,
    private _router:Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if(this.id !== "add" && this.id !== null){
      this._service.getFoodItemById(this.id).subscribe(
        (data:FoodItems)=>{
          console.log(data);
          this.foodItem = data;
        },
        (error:any)=>{
          console.log(error);
        }
    )}
  }

  onSubmit(e:any){
    if(this.id === "add"){
      this._service.addFoodItem(this.foodItem).subscribe(
        (data:any)=>{
          console.log(data);
          this._router.navigate(['/admin/menu']);
        },
        (error:any)=>{
          console.log(error);
        }
      )
    }
    else{
      this._service.updateFoodItem(this.foodItem).subscribe(
        (data:any)=>{
          console.log(data);
          // this._router.navigate(['/admin/menu']);
        },
        (error:any)=>{
          console.log(error);
        }
      )
    }        
  }

  onChangeFile(e:any){
    // Convert image to byte array
    const reader = new FileReader();
    reader.onload = () => {
      let temp = reader.result;
      if(temp){
        this.foodItem.image = temp.slice(temp.toString().indexOf(',') + 1);
      }
    }    
    if(e.target.files && e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }
  }

}
