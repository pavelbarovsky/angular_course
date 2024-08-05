import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteRecipe, Recipe } from 'src/app/store/model/recipe.model';
import { LoadRecipes } from 'src/app/store/model/recipe.model';
import { AppStateModel } from 'src/app/store/app.state';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { Router } from '@angular/router';
import { ModalBase } from 'src/app/class/modal-base.class';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent extends ModalBase implements OnInit {
  @Select((state: { app: AppStateModel }) => state.app.recipes) recipes$!: Observable<Recipe[]>;

  allRecipes: any;

  constructor(private store: Store, 
    public AdminDataServise: AdminDataService, 
    private router: Router,
    private notifyService: NotifyService) {
    super();
  }

  ngOnInit(): void {
    this.loadRecipes();
    console.log(this.allRecipes);
  }

  loadRecipes() {
    this.store.dispatch(new LoadRecipes()).subscribe(() => {
      this.getAllRecipes();
    });
  }

  getAllRecipes() {
    this.AdminDataServise.getRecipes().subscribe({
      next: (response: any) => {
        this.allRecipes = response;
        console.log(this.allRecipes);
      }
    })
  }

  editRecipe(recipe: Recipe): void {
    this.router.navigate(['/edit-recipe']);
  }

  deleteRecipe(recipe: Recipe): void {
    this.openModal(
      'Удалить этот рецепт?',
      'Вы хотите удалить рецепт',
      { type: 'recipe', id: recipe.id }
    );
  }

  onConfirmModal() {
    if (this.entity.type === 'recipe') {
      this.store.dispatch(new DeleteRecipe(this.entity.id)).subscribe({
        next: () => {
          this.notifyService.showNoti({
            title: 'Успешно',
            subtitle: 'Рецепт был удален',
            type: 'success',
            timeout: 3000
          });
        },
        error: () => {
          this.notifyService.showNoti({
            title: 'Ошибка',
            subtitle: 'Не удалось удалить рецепт',
            type: 'error',
            timeout: 3000
          });
        }
      });
    }
    this.closeModal();
  }
}
