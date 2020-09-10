import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThUserDetailComponent } from './th-user-detail.component';

describe('ThUserDetailComponent', () => {
  let component: ThUserDetailComponent;
  let fixture: ComponentFixture<ThUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
