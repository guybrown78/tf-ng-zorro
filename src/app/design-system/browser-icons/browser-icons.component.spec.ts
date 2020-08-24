import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserIconsComponent } from './browser-icons.component';

describe('BrowserIconsComponent', () => {
  let component: BrowserIconsComponent;
  let fixture: ComponentFixture<BrowserIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
