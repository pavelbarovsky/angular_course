import { TestBed } from '@angular/core/testing';

import { PrefetchResolver } from './prefetch.resolver';

describe('PrefetchResolver', () => {
  let resolver: PrefetchResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PrefetchResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
