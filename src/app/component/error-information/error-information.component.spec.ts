import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInformationComponent } from './error-information.component';

describe('ErrorInformationComponent', () => {
  let component: ErrorInformationComponent;
  let fixture: ComponentFixture<ErrorInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorInformationComponent]
    });
    fixture = TestBed.createComponent(ErrorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
