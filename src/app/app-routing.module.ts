import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { HomemainComponent } from './component/homemain/homemain.component'
import { StatuscarComponent } from './component/statuscar/statuscar.component';
import { CaraddComponent } from './component/caradd/caradd.component';
import { EmployaddComponent } from './component/employadd/employadd.component';
import { HistoryComponent } from './component/history/history.component';


const routes: Routes = [
  { path: 'registor', component: RegisterComponent },
  { path: 'homemain' , component: HomemainComponent},
  { path: 'stattuscar' , component: StatuscarComponent},
  { path: 'caradd' , component: CaraddComponent},
  { path: 'employadd' , component: EmployaddComponent},
  { path: 'history' , component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
