import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThUsersComponent } from './th-users.component';

describe('ThUsersComponent', () => {
  let component: ThUsersComponent;
  let fixture: ComponentFixture<ThUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
