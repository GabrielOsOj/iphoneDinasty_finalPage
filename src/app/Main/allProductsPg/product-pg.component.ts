import { Component } from '@angular/core';
import { FamilyCarrouselComponent } from "../shared/productsSection/family-carrousel/family-carrousel.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-product-pg',
  standalone: true,
  imports: [FamilyCarrouselComponent, FooterComponent,HeaderComponent],
  templateUrl: './product-pg.component.html',
  styleUrl: './product-pg.component.css'
})
export class ProductPgComponent {

}
