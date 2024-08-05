import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadRecipes } from 'src/app/store/model/recipe.model';
import { Recipe } from 'src/app/store/model/recipe.model';
import { Subscription, interval } from 'rxjs';
import { DateFormatPipe } from 'src/app/pipe/date-format.pipe';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  currentIndex: number = 0;
  autoSlideSubscription!: Subscription;

  email_text!: string;

  constructor(
    private store: Store, 
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadRecipes()).subscribe(() => {
      this.recipes = this.store.selectSnapshot(state => state.app.recipes).slice(1, 4);
      this.startAutoSlide();
    });
  }

  startAutoSlide() {
    this.autoSlideSubscription = interval(5000).subscribe(() => this.nextSlide());
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.recipes.length - 1 : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex === this.recipes.length - 1) ? 0 : this.currentIndex + 1;
  }

  ngOnDestroy(): void {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }
}
