import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';

const routes: Routes = [
  { path: 'maps', component: DashboardComponent },
  { path: 'complaints', component: ComplaintsComponent },
  {
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
