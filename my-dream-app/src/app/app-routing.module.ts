import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home/home.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { TableComponent } from './table/table.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './loginGuard.service';
import { CodeConverterComponent } from './code-converter/code-converter.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'agencies', component: AgenciesComponent, canActivate: [LoginGuard] },
  { path: 'billForm', component: BillFormComponent },
  { path: 'table', component: TableComponent, canActivate: [LoginGuard] },
  { path: 'add-agency', component: AddAgencyComponent, canActivate: [LoginGuard] },
  { path: 'code-converter', component: CodeConverterComponent, canActivate: [LoginGuard] },
  { path: '**', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
