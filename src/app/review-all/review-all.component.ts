import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Review } from '../books/model/review';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bs-review-all',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './review-all.component.html',
  styleUrl: './review-all.component.scss'
})
export class ReviewAllComponent {

  readonly reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }

}
