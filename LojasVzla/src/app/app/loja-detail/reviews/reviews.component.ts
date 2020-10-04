import { LojasService } from './../../lojas/lojas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.lojasService
      .reviewsOfLojas(this.route.parent.snapshot.params['id'])
  }

}

