import { Routes } from '@angular/router';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { authGuard } from './auth-guard';

const routes: Routes = [
    { path: '', component: UserDashboard, canActivate: [authGuard] }
];