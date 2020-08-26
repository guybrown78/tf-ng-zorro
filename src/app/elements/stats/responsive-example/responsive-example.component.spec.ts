import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveExampleComponent } from './responsive-example.component';

describe('ResponsiveExampleComponent', () => {
  let component: ResponsiveExampleComponent;
  let fixture: ComponentFixture<ResponsiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
