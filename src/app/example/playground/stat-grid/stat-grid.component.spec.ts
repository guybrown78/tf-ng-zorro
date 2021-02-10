import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGridComponent } from './stat-grid.component';

describe('StatGridComponent', () => {
  let component: StatGridComponent;
  let fixture: ComponentFixture<StatGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
