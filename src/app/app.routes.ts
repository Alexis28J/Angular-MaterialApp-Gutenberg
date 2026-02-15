import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListComponent } from './components/list-component/list-component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
