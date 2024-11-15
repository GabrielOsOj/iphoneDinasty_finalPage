import { Routes } from '@angular/router';
import { HomeComponentComponent } from './Main/homePg/home-component.component';
import { ComparatorComponent } from './Main/comparatorPg/comparator.component';
import { ProductComponent } from './Main/productDsPG/product.component';

export const routes: Routes = [
    { 
        path: '', loadComponent:()=>import('./Main/homePg/home-component.component').then(m=>m.HomeComponentComponent)},
    {
        path: 'comparador',
        loadComponent: () => import('./Main/comparatorPg/comparator.component').then(m => m.ComparatorComponent)
    },
    {
        path: 'product/:id', loadComponent: () => import('./Main/productDsPG/product.component').then(m => m.ProductComponent)
    }
];
