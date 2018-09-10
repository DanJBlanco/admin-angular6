import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { Nopage404Component } from './shared/nopage404/nopage404.component';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', component: Nopage404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
