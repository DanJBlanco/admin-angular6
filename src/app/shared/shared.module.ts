import { NgModule } from '@angular/core';

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

    ],
    providers: [

    ]
})

export class SharedModule { }
