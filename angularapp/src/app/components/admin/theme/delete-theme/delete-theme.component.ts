import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { ThemeServiceService } from 'src/app/services/theme-service.service';
import { AllServiceService } from 'src/app/services/all-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})
export class DeleteThemeComponent implements OnInit {

  
  constructor(private _allservice : AllServiceService ,private themeService:ThemeServiceService , private route : ActivatedRoute, private  router : Router) { }

  themeId:string ='';
  id:string='';
  async ngOnInit(): Promise<void> {
    this.themeId=this.route.snapshot.params['id'];
    //this.id= <string>await this._allservice.AccessProfile();
    //this.sendRequest(this.themeId);
    this.themeService.deleteTheme(this.themeId)
        .subscribe(
          (res) => {
            console.log(res);
            
            Swal.fire('Success','Theme is successfully deleted ','success');
            this.gotoThemeList();
           
          },
          (err) => {
            console.log(err);
          });
  }

 

  

/*sendRequest(themeId :string){
      
      this.themeService.deleteTheme(this.themeId)
        .subscribe(
          (res) => {
            console.log(res);
            this.gotoThemeList();
            Swal.fire('Success','Theme is successfully deleted ','success');
           
          },
          (err) => {
            console.log(err);
          });
      
  }*/
  gotoThemeList()
  {
    this.router.navigate(['admin/getTheme' ]);
  }
  

  

}
