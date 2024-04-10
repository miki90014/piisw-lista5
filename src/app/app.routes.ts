import { Routes } from '@angular/router';
import {BookListComponent} from "./books/components/book-list/book-list.component";
import {bookListResolver} from "./books/resolvers/book-list.resolver";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { bookDetailResolver } from './books/resolvers/book-detail.resolver';
import { ReviewListComponent } from './review-list/review-list.component';
import { reviewListResolver } from './books/resolvers/review-list.resolver';
import { ReviewAllComponent } from './review-all/review-all.component';
import { reviewAllResolver } from './books/resolvers/review-all.resolver';
import { BookEditComponent } from './book-edit/book-edit.component';
import { ReviewAddComponent } from './review-add/review-add.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/books'
  },
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: bookListResolver
    }
  },
  {
    path: 'books/:id',
    component: BookDetailComponent,
    resolve: {
      book: bookDetailResolver
    }
  },
  {
    path: 'books/:id/reviews',
    component: ReviewListComponent,
    resolve: {
      reviews: reviewListResolver
    }
  },
  {
    path: 'reviews',
    component: ReviewAllComponent,
    resolve: {
      reviews: reviewAllResolver
    }
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent,
    resolve: {
      book: bookDetailResolver
    }
  },
  {
    path: 'books/:id/reviews/add',
    component: ReviewAddComponent,
    resolve: {
      book: bookDetailResolver
    }
  }
];
