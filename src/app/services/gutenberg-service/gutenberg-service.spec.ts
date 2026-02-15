import { TestBed } from '@angular/core/testing';

import { GutenbergService } from './gutenberg-service';

describe('GutenbergService', () => {
  let service: GutenbergService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GutenbergService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
