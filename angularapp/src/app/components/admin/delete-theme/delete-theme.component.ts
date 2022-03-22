import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
@Component({
  selector: 'app-delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})
export class DeleteThemeComponent implements OnInit {
  ngbModelRef!: NgbModalRef ;
  constructor(private modalService: NgbModal,private themeService:ThemeServiceService) { }

  themeId:string ="";
  ngOnInit(): void {
  }

  closeResult = '';

  

  sendRequest(){
      this.ngbModelRef.close();
      this.themeService.deleteTheme(this.themeId)
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
    
    /*
    this.ngbModelRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    */
  }

}
