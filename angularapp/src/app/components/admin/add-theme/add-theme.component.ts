import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { ThemeModel } from './../../../models/ThemeModel';


@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {

  ngbModelRef!: NgbModalRef ;

  constructor(private modalService: NgbModal, private themeService:ThemeServiceService) {}

  

  themeModel: ThemeModel = {
    themeName: "",
    imegeUrl: "",
    photographerDetails: "",
    videographerDetails: "",
    returnGift: "",
    themeCost: 0,
    themeDescription: ""
  }




  closeResult = '';

  

  sendRequest(){
      this.ngbModelRef.close();
      this.themeService.addTheme(this.themeModel)
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          });
  }

  open(content: any) {
    this.ngbModelRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log(content);
    /*
    this.ngbModelRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    */
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}






