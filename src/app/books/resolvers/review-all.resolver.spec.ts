import { TestBed } from '@angular/core/testing';

import {BooksService} from "../services/books.service";
import {ResolveFn} from "@angular/router";

describe('ReviewAllResolver', () => {
  const reviewAllResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => reviewAllResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(reviewAllResolver).toBeTruthy();
  });
});
