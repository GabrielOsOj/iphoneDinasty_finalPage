import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredBannerComponent } from './colored-banner.component';

describe('ColoredBannerComponent', () => {
  let component: ColoredBannerComponent;
  let fixture: ComponentFixture<ColoredBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoredBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoredBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
