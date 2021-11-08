import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import * as UsersActions from '../core/store/user/user.actions';
import { User } from '../core/store/user/user.model';
import { UsersState } from '../core/store/user/user.reducer';
import * as UserSelector from '../core/store/user/user.selectors';
import { UserAddComponent } from './user-add/user-add.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    selectedUser!: User;

    users$ = this.store.select<any>(UserSelector.getAllUsers);

    constructor(private store: Store<UsersState>, public dialog: MatDialog) { }

    ngOnInit(): void {
        this.store.dispatch(UsersActions.GetUsersList());
        // this.store.dispatch(UsersActions.UpdateUser({ user: {
        //     id: 2,
        //     name: "qsd"
        // } }));
    }

    userSelected(selectedUser: User): void {
        // this.store.dispatch(UsersActions.GetUserById({ userId: selectedUser.id }));

        this.store.select<any>(UserSelector.getUserById(selectedUser.id))
            .subscribe(user => this.selectedUser = user)
    }

    refresh() {
        this.store.dispatch(UsersActions.GetUsersList());
    }

    addUser() {
        this.dialog.open(UserAddComponent);
    }
}
