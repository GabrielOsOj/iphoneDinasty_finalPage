import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicalSheetComponent } from './tecnical-sheet.component';

describe('TecnicalSheetComponent', () => {
  let component: TecnicalSheetComponent;
  let fixture: ComponentFixture<TecnicalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnicalSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnicalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
