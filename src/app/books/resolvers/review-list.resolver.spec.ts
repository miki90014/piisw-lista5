import { TestBed } from '@angular/core/testing';
import { reviewListResolver } from './review-list.resolver';

describe('ReviewListResolver', () => {
  let resolver: typeof reviewListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(reviewListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});