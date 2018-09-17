import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { ServiceModule } from './services/service.module';

// Modulos independientes
import { PagesModule } from './pages/pages.module';
import { UserModule } from './user/user.module';

// RUTAS
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    UserModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
