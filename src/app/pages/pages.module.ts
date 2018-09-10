import { NgModule } from '@angular/core';

// Modulos de la Aplicacion
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        ProgressComponent,
        DashboardComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],
    providers: [

    ]
})

export class PagesModule { }
