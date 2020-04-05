import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home/home.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { TableComponent } from './table/table.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'agencies', component: AgenciesComponent },
  { path: 'billForm', component: BillFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'add-agency', component: AddAgencyComponent },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
