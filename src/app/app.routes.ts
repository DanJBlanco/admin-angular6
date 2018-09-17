import { RouterModule, Routes } from '@angular/router';
import { Nopage404Component } from './shared/nopage404/nopage404.component';
 
const appRoutes: Routes = [
    { path: '**', pathMatch: 'full', component: Nopage404Component }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
