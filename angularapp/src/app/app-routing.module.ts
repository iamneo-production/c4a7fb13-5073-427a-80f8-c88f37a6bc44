import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//imported the component
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
   
  // Added the dsiplay route to the route array
  {path: 'display', component: DisplayComponent , pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
