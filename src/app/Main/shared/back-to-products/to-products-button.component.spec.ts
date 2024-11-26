import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToProductsButtonComponent } from './to-products-button.component';

describe('ToProductsButtonComponent', () => {
  let component: ToProductsButtonComponent;
  let fixture: ComponentFixture<ToProductsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToProductsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToProductsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
