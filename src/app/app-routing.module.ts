import { Routes } from '@angular/router';
import { LeaveApprovalComponent } from './leave-approval/leave-approval.component';
import { LeaveRequestFormComponent } from './leave-request-form/leave-request-form.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'approve-leave', component: LeaveApprovalComponent },
  { path: 'leave-request', component: LeaveRequestFormComponent },
  { path: 'leave-history', component: LeaveHistoryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
