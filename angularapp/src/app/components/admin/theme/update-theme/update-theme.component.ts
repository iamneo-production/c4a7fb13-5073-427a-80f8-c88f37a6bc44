import {  Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { ThemeModel } from './../../../../models/ThemeModel';
import { AllServiceService } from 'src/app/services/all-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-theme',
  templateUrl: './update-theme.component.html',
  styleUrls: ['./update-theme.component.css']
})
export class UpdateThemeComponent implements OnInit {

  @ViewChild('content1') public content1!: TemplateRef<any>;
  //ngbModelRef!: NgbModalRef ;

  themeModel : ThemeModel ;
  themeId:string ='';
  id: string='';

  constructor(private modalService: NgbModal,private themeService:ThemeServiceService , private _allservice: AllServiceService , private router : Router , private route :ActivatedRoute ) { }

  
  ngOnInit(): void {
    this.themeId = this.route.snapshot.params['id'];
   this._allservice.AccessProfile().then((data : any) => {
      console.log("get get");
      this.id = data;
     // console.log(this.admin);
     
    }, (error : any ) => console.log(error));
    this.themeService.getTheme(this.themeId).subscribe((data : any ) => {
      console.log("get get");
      this.themeModel = data;
     // console.log(this.admin);
     
    }, (error : any ) => console.log(error));

  }

 /* closeResult = '';

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
  }  */

  updateTheme(){
    this.themeService.updateTheme(this.themeId,this.themeModel)
        .subscribe(
          (res) => {
            console.log("Updated Theme: " ,res);
            this.gotoThemeList();
          },
          (err) => {
            console.log(err);
          });
         // this.ngbModelRef.close();
  }
  gotoThemeList()
  {
    this.router.navigate(['admin/getTheme']);
  }
}
