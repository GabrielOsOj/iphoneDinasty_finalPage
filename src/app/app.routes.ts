import { Routes } from '@angular/router';
import { TestCMPComponent } from './Main/homePg/componentBk/test-cmp.component';
import { FamilyCarrouselComponent } from './Main/homePg/productsSection/family-carrousel/family-carrousel.component';

export const routes: Routes = [
    {
        path:'test',
        component:FamilyCarrouselComponent
    },
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
        path:"**",
        redirectTo: ''
    }


];

/*  
 {
        
        path:'',
        component:TestCMPComponent

    } 
        
*/