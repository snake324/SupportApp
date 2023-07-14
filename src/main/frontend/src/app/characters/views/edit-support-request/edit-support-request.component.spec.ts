import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupportRequestComponent } from './edit-support-request.component';

describe('EditSupportRequestComponent', () => {
  let component: EditSupportRequestComponent;
  let fixture: ComponentFixture<EditSupportRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSupportRequestComponent]
    });
    fixture = TestBed.createComponent(EditSupportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
