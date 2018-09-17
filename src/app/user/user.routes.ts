import { AccountSettingComponent } from './account-setting/account-setting.component';
import { AppComponent } from './../app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'setting', component: AccountSettingComponent },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard'},
        ]
    }
];

export const USER_ROUTE = RouterModule.forChild(routes);
