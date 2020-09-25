import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsDashboardComponent } from './lms-dashboard.component';

describe('LmsDashboardComponent', () => {
  let component: LmsDashboardComponent;
  let fixture: ComponentFixture<LmsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
