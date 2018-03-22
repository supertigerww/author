import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'new',component:NewComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'',component:InfoComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
