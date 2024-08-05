import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteUser, User } from 'src/app/store/model/user.model';
import { LoadUsers } from 'src/app/store/model/user.model';
import { AppStateModel } from 'src/app/store/app.state';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { Router } from '@angular/router';
import { ModalBase } from 'src/app/class/modal-base.class';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends ModalBase implements OnInit {
  @Select((state: { app: AppStateModel }) => state.app.users) users$!: Observable<User[]>;

  allUsers: any;

  constructor(
    private store: Store, 
    public AdminDataServise: AdminDataService, 
    private router: Router,
    private notifyService: NotifyService) {
    super();
  }

  ngOnInit(): void {
    this.loadUsers();
    console.log(this.allUsers);
  }

  loadUsers() {
    this.store.dispatch(new LoadUsers()).subscribe(() => {
      this.getAllUsers();
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
  
  editUser(user: User): void {
    this.router.navigate(['/user-profile', user.id]);
  }

  deleteUser(user: User): void {
    this.openModal(
      'Удалить этого пользователя?',
      `Вы хотите удалить ${user.firstName} ${user.lastName}. Действие нельзя отменить`,
      { type: 'user', id: user.id }
    );
  }

  onConfirmModal() {
    if (this.entity.type === 'user') {
      this.store.dispatch(new DeleteUser(this.entity.id)).subscribe({
        next: () => {
          this.notifyService.showNoti({
            title: 'Успешно',
            subtitle: 'Пользователь был удален',
            type: 'success',
            timeout: 3000,
          });
        },
        error: () => {
          this.notifyService.showNoti({
            title: 'Ошибка',
            subtitle: 'Не удалось удалить пользователя',
            type: 'error',
            timeout: 3000,
          });
        }
      });
    }
    this.closeModal();
  }
}