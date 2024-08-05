import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AdminDataService } from '../services/admin-data.service';
import { User, LoadUsers, DeleteUser } from './model/user.model';
import { Recipe, LoadRecipes, DeleteRecipe, LikeRecipe, UnlikeRecipe } from './model/recipe.model';
import { tap } from 'rxjs/operators';

export interface AppStateModel {
  users: User[];
  recipes: Recipe[];
  likedRecipes: Recipe[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    users: [],
    recipes: [],
    likedRecipes: []
  }
})

@Injectable()
export class AppState {

  constructor(private AdminDataService: AdminDataService) { }

  @Selector()
  static getUsers(state: AppStateModel): User[] {
    return state.users;
  }

  @Selector()
  static getRecipes(state: AppStateModel): Recipe[] {
    return state.recipes;
  }

  @Selector()
  static getLikedRecipes(state: AppStateModel): Recipe[] {
    return state.likedRecipes;
  }

  @Action(LoadUsers)
  loadUsers(ctx: StateContext<AppStateModel>) {
    return this.AdminDataService.getUsers().pipe(tap(users => {
      ctx.patchState({ users });
    }));
  }

  @Action(LoadRecipes)
  loadRecipes(ctx: StateContext<AppStateModel>) {
    return this.AdminDataService.getRecipes().pipe(tap(recipes => {
      ctx.patchState({ recipes });
    }));
  }

  @Action(DeleteUser)
  deleteUser(ctx: StateContext<AppStateModel>, action: DeleteUser) {
    return this.AdminDataService.deleteUser(action.id).pipe(tap(() => {
      const state = ctx.getState();
      const filteredUsers = state.users.filter(user => user.id !== action.id);
      ctx.patchState({ users: filteredUsers });
    }));
  }

  @Action(DeleteRecipe)
  deleteRecipe(ctx: StateContext<AppStateModel>, action: DeleteRecipe) {
    return this.AdminDataService.deleteRecipe(action.id).pipe(tap(() => {
      const state = ctx.getState();
      const filteredRecipes = state.recipes.filter(recipe => recipe.id !== action.id);
      ctx.patchState({ recipes: filteredRecipes });
    }));
  }

  @Action(LikeRecipe)
  likeRecipe(ctx: StateContext<AppStateModel>, action: LikeRecipe) {
    const state = ctx.getState();
    ctx.patchState({
      likedRecipes: [...state.likedRecipes, action.recipe]
    });
  }

  @Action(UnlikeRecipe)
  unlikeRecipe(ctx: StateContext<AppStateModel>, action: UnlikeRecipe) {
    const state = ctx.getState();
    ctx.patchState({
      likedRecipes: state.likedRecipes.filter(recipe => recipe.id !== action.id)
    });
  }
}
