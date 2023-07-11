import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportRequestFormComponent } from './support-request-form.component';

describe('SupportRequestFormComponent', () => {
  let component: SupportRequestFormComponent;
  let fixture: ComponentFixture<SupportRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportRequestFormComponent]
    });
    fixture = TestBed.createComponent(SupportRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
