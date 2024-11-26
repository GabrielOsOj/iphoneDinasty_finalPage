import { Routes } from '@angular/router';
import { TestCMPComponent } from './Main/homePg/componentBk/test-cmp.component';

export const routes: Routes = [
 
    {
        path: '', loadComponent: () => import('./Main/homePg/home-component.component').then(m => m.HomeComponentComponent)
    },
    {
        path: 'comparador',
        loadComponent: () => import('./Main/comparatorPg/comparator.component').then(m => m.ComparatorComponent)
    },
    {
        path: 'product/:id', loadComponent: () => import('./Main/productDsPG/product.component').then(m => m.ProductComponent)
    },
    {
        path: 'allProducts',
        loadComponent: () => import('./Main/allProductsPg/product-pg.component').then(m => m.ProductPgComponent)
    },
    {
        path:"**",
        redirectTo: ''
    }


];

/*  
 {
        
        path:'',
        component:TestCMPComponent

    },
       {
        path:'test',
        component:FamilyCarrouselComponent
    },
        
*/