import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsRegistrationsComponent } from './lms-registrations.component';

describe('LmsRegistrationsComponent', () => {
  let component: LmsRegistrationsComponent;
  let fixture: ComponentFixture<LmsRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
