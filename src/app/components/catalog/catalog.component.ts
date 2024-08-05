import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { NotifyService } from 'src/app/services/notify.service';
import { AppStateModel } from 'src/app/store/app.state';
import { LikeService } from 'src/app/services/like.service';
import { LoadRecipes, Recipe } from 'src/app/store/model/recipe.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  constructor(private store: Store, 
    public AdminDataServise: AdminDataService, 
    private router: Router,
    private notifyService: NotifyService,
    private likeService: LikeService
  ) {}

  displayedRecipes: Recipe[] = [];

  @Select((state: { app: AppStateModel }) => state.app.recipes) recipes$!: Observable<Recipe[]>;


  ngOnInit() {
    this.store.dispatch(new LoadRecipes());
    this.recipes$.subscribe(recipes => {
      this.displayedRecipes = this.likeService.getRandomRecipes(recipes, 10, new Set());
    });
  }

  toggleLike(recipe: Recipe) {
    this.likeService.toggleLike(recipe);
  }

  isLiked(recipe: Recipe): boolean {
    return this.likeService.isLiked(recipe);
  }
}
