import { Component, OnInit } from '@angular/core'
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/store/model/recipe.model';
import { AppState} from 'src/app/store/app.state';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-tryit',
  templateUrl: './tryit.component.html',
  styleUrls: ['./tryit.component.css']
})
export class TryitComponent implements OnInit{
  @Select(AppState.getRecipes) recipes$!: Observable<Recipe[]>;

  displayedRecipes: Recipe[] = [];

  constructor(private likeService: LikeService) {}

  ngOnInit() {
    this.recipes$.subscribe(recipes => {
      this.displayedRecipes = this.likeService.getRandomRecipes(recipes, 4, new Set());
    });
  }

  toggleLike(recipe: Recipe) {
    this.likeService.toggleLike(recipe);
  }

  isLiked(recipe: Recipe): boolean {
    return this.likeService.isLiked(recipe);
  }
}
