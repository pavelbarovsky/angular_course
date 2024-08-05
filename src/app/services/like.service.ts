import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Recipe } from '../store/model/recipe.model';
import { LikeRecipe, UnlikeRecipe } from '../store/model/recipe.model';
import { NotifyService } from '../services/notify.service';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  @Select(AppState.getLikedRecipes) likedRecipes$!: Observable<Recipe[]>;

  likedRecipes: Recipe[] = [];

  constructor(private store: Store, private notifyService: NotifyService) {
    this.likedRecipes$.subscribe(likedRecipes => {
      this.likedRecipes = likedRecipes;
    });
  }

  getRandomRecipes(recipes: Recipe[], count: number, exclude: Set<string>): Recipe[] {
    const filteredRecipes = recipes.filter(recipe => !exclude.has(recipe.id));
    const shuffled = filteredRecipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  toggleLike(recipe: Recipe) {
    const action = this.isLiked(recipe) ? new UnlikeRecipe(recipe.id) : new LikeRecipe(recipe);
    this.store.dispatch(action);
    this.notifyService.showNoti({
      title: this.isLiked(recipe) ? 'Добавлено в избранное' : 'Удалено из избранного',
      subtitle: this.isLiked(recipe) ? 'Сохранили этот рецепт для вас' : 'Рецепт был удалён из избранного',
      type: this.isLiked(recipe) ? 'success' : 'error',
      timeout: 3000
    });
}

  isLiked(recipe: Recipe): boolean {
    return this.likedRecipes.some(likedRecipe => likedRecipe.id === recipe.id);
  }
}