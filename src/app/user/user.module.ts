import { NgModule } from '@angular/core';

// Componentes de la aplicacion
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { UserComponent } from './user.component';
import { USER_ROUTE } from './user.routes';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        AccountSettingComponent,
        UserComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        AccountSettingComponent
    ],
    imports: [
        USER_ROUTE,
        SharedModule
    ],
    providers: [

    ]

})

export class UserModule { }
