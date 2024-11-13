import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCarrouselComponent } from './family-carrousel.component';

describe('FamilyCarrouselComponent', () => {
  let component: FamilyCarrouselComponent;
  let fixture: ComponentFixture<FamilyCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyCarrouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilyCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
