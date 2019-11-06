import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComplaintComponent } from './modal-complaint.component';

describe('ModalComplaintComponent', () => {
  let component: ModalComplaintComponent;
  let fixture: ComponentFixture<ModalComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
