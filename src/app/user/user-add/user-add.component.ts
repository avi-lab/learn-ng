import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersState } from 'src/app/core/store/user/user.reducer';
import * as UsersActions from 'src/app/core/store/user/user.actions';
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

    name!: string;

    constructor(private store: Store<UsersState>) { }

    createUser() {
        this.store.dispatch(UsersActions.AddUser({
            user: {
                id: Math.floor(Math.random() * 10000),
                name: this.name
            }
        }));
    }
}
