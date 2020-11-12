import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfAppSideDrawerComponent } from './tf-app-side-drawer.component';

describe('TfAppSideDrawerComponent', () => {
  let component: TfAppSideDrawerComponent;
  let fixture: ComponentFixture<TfAppSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfAppSideDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfAppSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
