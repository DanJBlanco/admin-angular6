import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Componentes de la Aliacion
import { Nopage404Component } from './nopage404/nopage404.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        Nopage404Component
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        Nopage404Component
    ],
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
    providers: [

    ]
})

export class SharedModule { }
