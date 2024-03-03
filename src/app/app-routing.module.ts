import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { ExtraCompoComponent } from './extra-compo/extra-compo.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"",component:RegisterationComponent},
  {path:"registration",component:RegisterationComponent},
  {path:"Extracompo",component:ExtraCompoComponent},
  {path:"Profile/:id",component:ProfileComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
