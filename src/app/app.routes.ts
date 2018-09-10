import { RouterModule, Routes } from '@angular/router';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { LoginComponent } from './user/login/login.component';
import { Nopage404Component } from './shared/nopage404/nopage404.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    { path: '**', pathMatch: 'full', component: Nopage404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
