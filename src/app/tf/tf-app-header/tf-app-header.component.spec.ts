import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfAppHeaderComponent } from './tf-app-header.component';

describe('TfAppHeaderComponent', () => {
  let component: TfAppHeaderComponent;
  let fixture: ComponentFixture<TfAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfAppHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
