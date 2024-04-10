import { Component } from '@angular/core';
import { Book } from '../books/model/book';
import { ActivatedRoute, RouterLink} from '@angular/router';
import {Location} from "@angular/common";
import {BooksService} from "../books/services/books.service";
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'bs-book-edit',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  readonly book: Book;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksService: BooksService,
    private _location: Location
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];
  }

  onSubmit() {
    this.booksService.saveBook(this.book).subscribe();
    this._location.back();
  }
}
