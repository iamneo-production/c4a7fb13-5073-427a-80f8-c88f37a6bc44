import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { ThemeModel } from './../../../models/ThemeModel';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-theme',
  templateUrl: './upate-theme.component.html',
  styleUrls: ['./upate-theme.component.css']
})
export class UpateThemeComponent implements OnInit {
  @ViewChild('content1') public content1!: TemplateRef<any>;
  ngbModelRef!: NgbModalRef ;

  themeModel: ThemeModel = {
    themeName: "",
    imegeUrl: "",
    photographerDetails: "",
    videographerDetails: "",
    returnGift: "",
    themeCost: 0,
    themeDescription: ""
  }


  constructor(private modalService: NgbModal,private themeService:ThemeServiceService) { }

  themeId:string ="";
  ngOnInit(): void {
  }

  closeResult = '';

  sendRequest(){
      this.themeService.getTheme(this.themeId).subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.themeModel = response; 
          console.log(response);
          this.open(this.content1);
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          console.log(error)
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed  
        })
      this.ngbModelRef.close();
  }

  open(content: any) {
    this.ngbModelRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }  

  updateTheme(){
    this.themeService.updateTheme(this.themeId,this.themeModel)
        .subscribe(
          (res) => {
            console.log("Updated Theme: " ,res);
          },
          (err) => {
            console.log(err);
          });
          this.ngbModelRef.close();
  }
}
