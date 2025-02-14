import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component'; 
const routes: Routes = [
  { path: 'approve-leave', component: LeaveApprovalComponent },
  // ถ้ามี route อื่นๆ เช่น
  // { path: 'leave-request-form', component: LeaveRequestFormComponent },
  // { path: 'leave-history', component: LeaveHistoryComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
