import { Component } from '@angular/core';4
import {ActivatedRoute} from "@angular/router";
import {Review} from "../books/model/review";
import {Book} from "../books/model/book";
import {Location} from '@angular/common';
import {BooksService} from "../books/services/books.service";
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'bs-review-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './review-add.component.html',
  styleUrl: './review-add.component.scss'
})
export class ReviewAddComponent {
  readonly review: Review;
  readonly book: Book;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly booksService: BooksService,
    private _location: Location
  ) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.review = {
      id: -1,
      forBook: Number(this.activatedRoute.snapshot.paramMap.get("id")),
      title: "",
      description: "",
      rate: 0
    }
    booksService.getAllReviews().subscribe(
      r => this.review.id = r.length + 1
    )
  }

  onSubmit() {
    this.booksService.saveReview(this.review).subscribe();
    this._location.back();
  }
}
