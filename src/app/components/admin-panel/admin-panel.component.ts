import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';
import { filter } from 'rxjs/operators';
import { DeleteUser, User } from 'src/app/store/model/user.model';
import { DeleteRecipe, Recipe } from 'src/app/store/model/recipe.model';
import { Store} from '@ngxs/store';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  showModal: boolean = false;
  modalTitle: string = '';
  modalSubtitle: string = '';
  entity: any;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveTab();
      });
  }

  ngAfterViewInit(): void {
    this.setActiveTab();
  }

  setActiveTab(): void {
    const routePath = this.route.snapshot.firstChild?.routeConfig?.path;
    if (routePath === 'users') {
      this.tabGroup.selectedIndex = 0;
    } else if (routePath === 'recipes') {
      this.tabGroup.selectedIndex = 1;
    } else {
      this.tabGroup.selectedIndex = 0;
    }
  }

  onTabChange(event: any): void {
    if (event.index === 0) {
      this.router.navigate(['admin/users']);
    } else if (event.index === 1) {
      this.router.navigate(['admin/recipes']);
    }
  }


  deleteUserModal(user: User): void {
    this.showModal = true;
    this.modalTitle = 'Удалить этого пользователя?';
    this.modalSubtitle = `Вы хотите удалить ${user.firstName} ${user.lastName}. Действие нельзя отменить`;
    this.entity = { type: 'user', id: user.id };
  }

  deleteRecipeModal(recipe: Recipe): void {
    this.showModal = true;
    this.modalTitle = 'Удалить этот рецепт?';
    this.modalSubtitle = 'Вы хотите удалить этот рецепт. Действие нельзя отменить';
    this.entity = { type: 'recipe', id: recipe.id };
  }

  onCloseModal() {
    this.showModal = false;
  }

  onConfirmModal() {
    if (this.entity.type === 'user') {
      this.store.dispatch(new DeleteUser(this.entity.id));
    } else if (this.entity.type === 'recipe') {
      this.store.dispatch(new DeleteRecipe(this.entity.id));
    }
    this.showModal = false;
  }
}
