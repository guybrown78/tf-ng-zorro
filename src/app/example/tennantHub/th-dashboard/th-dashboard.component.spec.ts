import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThDashboardComponent } from './th-dashboard.component';

describe('ThDashboardComponent', () => {
  let component: ThDashboardComponent;
  let fixture: ComponentFixture<ThDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
