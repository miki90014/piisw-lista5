import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {BooksService} from '../services/books.service';
import {Review} from '../model/review';

export const reviewAllResolver: ResolveFn<Review[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(BooksService).getAllReviews();
};
