import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Componentes de la aplicacion
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { UserComponent } from './user.component';
import { USER_ROUTE } from './user.routes';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceModule } from '../services/service.module';


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
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        ServiceModule
    ],
    providers: [

    ]

})

export class UserModule { }
