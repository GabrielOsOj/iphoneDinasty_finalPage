import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCMPComponent } from './test-cmp.component';

describe('TestCMPComponent', () => {
  let component: TestCMPComponent;
  let fixture: ComponentFixture<TestCMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestCMPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
