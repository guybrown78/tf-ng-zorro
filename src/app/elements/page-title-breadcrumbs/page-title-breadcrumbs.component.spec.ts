import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleBreadcrumbsComponent } from './page-title-breadcrumbs.component';

describe('PageTitleBreadcrumbsComponent', () => {
  let component: PageTitleBreadcrumbsComponent;
  let fixture: ComponentFixture<PageTitleBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTitleBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTitleBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
