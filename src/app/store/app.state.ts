import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AdminDataService } from '../services/admin-data.service';
import { User, LoadUsers } from './model/user.model';
import { Recipe, LoadRecipes } from './model/recipe.model';
import { tap } from 'rxjs/operators';

export interface AppStateModel {
  users: User[];
  recipes: Recipe[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    users: [],
    recipes: []
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
}
