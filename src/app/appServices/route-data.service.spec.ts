import { TestBed } from '@angular/core/testing';

import { RouteDataService } from './route-data.service';

describe('RouteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteDataService = TestBed.get(RouteDataService);
    expect(service).toBeTruthy();
  });
});
