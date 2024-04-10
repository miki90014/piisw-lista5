import { Component } from '@angular/core';
import { Book } from '../books/model/book';
import { ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'bs-book-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  readonly book: Book;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
  }
}
