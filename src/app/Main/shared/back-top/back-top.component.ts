import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-top.component.html',
  styleUrl: './back-top.component.css'
})
export class BackTopComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isVisible = scrollPosition > 100; // Mostrar botón si se baja más de 100px
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
