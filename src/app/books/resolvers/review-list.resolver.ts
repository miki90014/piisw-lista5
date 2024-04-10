import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {BooksService} from '../services/books.service';
import {Review} from '../model/review';

export const reviewListResolver: ResolveFn<Review[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(BooksService).getAllReviewsForBook(route.paramMap.get('id'));
};