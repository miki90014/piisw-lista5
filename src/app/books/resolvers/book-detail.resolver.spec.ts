import { TestBed } from '@angular/core/testing';

import { bookDetailResolver } from './book-detail.resolver';

describe('BookDetailResolver', () => {
  let resolver: typeof bookDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(bookDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
