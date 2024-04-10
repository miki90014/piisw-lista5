import { Component } from '@angular/core';
import { Review } from '../books/model/review';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bs-review-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss'
})
export class ReviewListComponent {
  readonly reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }
}
