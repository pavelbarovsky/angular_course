import { TestBed } from '@angular/core/testing';

import { ChangeDataInterceptor } from './change-data.interceptor';

describe('ChangeDataInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ChangeDataInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ChangeDataInterceptor = TestBed.inject(ChangeDataInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
