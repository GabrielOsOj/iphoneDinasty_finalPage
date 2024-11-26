import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPgComponent } from './product-pg.component';

describe('ProductPgComponent', () => {
  let component: ProductPgComponent;
  let fixture: ComponentFixture<ProductPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
