import { Routes } from '@angular/router';
import { HomeComponentComponent } from './Main/homePg/home-component.component';
import { ComparatorComponent } from './Main/comparatorPg/comparator.component';
import { ProductComponent } from './Main/productDsPG/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'comparador', component: ComparatorComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: '**', redirectTo: '' }
];
