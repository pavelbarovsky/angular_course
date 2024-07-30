import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/model/user.model';
import { Recipe } from 'src/app/store/model/recipe.model';
import { LoadUsers } from 'src/app/store/model/user.model';
import { LoadRecipes } from 'src/app/store/model/recipe.model';
import { AppStateModel } from 'src/app/store/app.state';
import { AdminDataService } from 'src/app/services/admin-data.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  @Select((state: { app: AppStateModel }) => state.app.users) users$!: Observable<User[]>;
  @Select((state: { app: AppStateModel }) => state.app.recipes) recipes$!: Observable<Recipe[]>;

  allUsers: any;
  allRecipes: any;

  constructor(private store: Store, public AdminDataServise: AdminDataService) { }

  ngOnInit(): void {
    this.loadData();

    console.log(this.allUsers);
    console.log(this.allRecipes);
  }

  loadData() {
    this.store.dispatch(new LoadUsers()).subscribe(() => {
      this.getAllUsers();
    });
    this.store.dispatch(new LoadRecipes()).subscribe(() => {
      this.getAllRecipes();
    });
  }

  getAllUsers() {
    this.AdminDataServise.getUsers().subscribe({
      next: (response: any) => {
        this.allUsers = response;
        console.log(this.allUsers);
      }
    })
  }

  getAllRecipes() {
    this.AdminDataServise.getRecipes().subscribe({
      next: (response: any) => {
        this.allRecipes = response;
        console.log(this.allRecipes);
      }
    })
  }

  editUser(user: User): void {
  }

  deleteUser(user: User): void {
  }

  editRecipe(recipe: Recipe): void {
  }

  deleteRecipe(recipe: Recipe): void {
  }
}
