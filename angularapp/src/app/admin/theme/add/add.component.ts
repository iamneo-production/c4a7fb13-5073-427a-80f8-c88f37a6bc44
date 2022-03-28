import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public id:String|null = "";
  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
