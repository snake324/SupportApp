import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSupportRequestComponent } from './list-support-request.component';

describe('ListSupportRequestComponent', () => {
  let component: ListSupportRequestComponent;
  let fixture: ComponentFixture<ListSupportRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSupportRequestComponent]
    });
    fixture = TestBed.createComponent(ListSupportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
