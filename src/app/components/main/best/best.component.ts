import { Component, OnInit } from '@angular/core'
import { Store, Select } from '@ngxs/store';
import { Observable} from 'rxjs';
import { Recipe } from 'src/app/store/model/recipe.model';
import { LoadRecipes} from 'src/app/store/model/recipe.model';
import { AppState} from 'src/app/store/app.state';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {
  @Select(AppState.getRecipes) recipes$!: Observable<Recipe[]>;

  displayedRecipes: Recipe[] = [];

  constructor(private store: Store, private likeService: LikeService) {}

  ngOnInit() {
    this.store.dispatch(new LoadRecipes());
    this.recipes$.subscribe(recipes => {
      this.displayedRecipes = this.likeService.getRandomRecipes(recipes, 3, new Set());
    });
  }

  viewMore() {
    this.recipes$.subscribe(recipes => {
      const currentRecipeIds = new Set(this.displayedRecipes.map(recipe => recipe.id));
      const additionalRecipes = this.likeService.getRandomRecipes(recipes, 3, currentRecipeIds);
      this.displayedRecipes.push(...additionalRecipes);
  
      if (this.displayedRecipes.length > 6) {
        this.displayedRecipes = this.displayedRecipes.slice(0, 6);
      }
    });
  }

  toggleLike(recipe: Recipe) {
    this.likeService.toggleLike(recipe);
  }

  isLiked(recipe: Recipe): boolean {
    return this.likeService.isLiked(recipe);
  }
}
