import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-products',
  standalone: true,
  imports: [],
  templateUrl: './to-products-button.component.html',
  styleUrl: './to-products-button.component.css'
})
export class ToProductsButtonComponent {


  constructor(private routes:Router){}

  goToProducts(){
    this.routes.navigate(['/','allProducts'])
  }

}
