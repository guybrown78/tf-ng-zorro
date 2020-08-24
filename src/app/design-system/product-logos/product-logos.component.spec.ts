import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLogosComponent } from './product-logos.component';

describe('ProductLogosComponent', () => {
  let component: ProductLogosComponent;
  let fixture: ComponentFixture<ProductLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
