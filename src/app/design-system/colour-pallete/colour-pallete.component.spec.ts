import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourPalleteComponent } from './colour-pallete.component';

describe('ColourPalleteComponent', () => {
  let component: ColourPalleteComponent;
  let fixture: ComponentFixture<ColourPalleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourPalleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourPalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
