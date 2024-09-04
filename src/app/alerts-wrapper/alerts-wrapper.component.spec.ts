import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsWrapperComponent } from './alerts-wrapper.component';

describe('AlertsWrapperComponent', () => {
  let component: AlertsWrapperComponent;
  let fixture: ComponentFixture<AlertsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
