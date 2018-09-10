import { NgModule } from '@angular/core';

// Componentes de la aplicacion
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [

    ],
    providers: [

    ]

})

export class UserModule { }
