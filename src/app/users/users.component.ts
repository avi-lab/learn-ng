import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUsersList } from '../core/store/users/user.actions';
import { User } from '../core/store/users/user.model';
import { UsersState } from '../core/store/users/user.reducer';
import * as UserSelector from '../core/store/users/user.selectors';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    selectedUser: User = {
        id: 0,
        name: ""
    };

    users$ = this.store.select<any>(UserSelector.getAllUsers);
    // error$ = this.store.select<any>(UserSelector.getFailure);

    constructor(private store: Store<UsersState>) { }

    ngOnInit(): void {
        this.store.dispatch(GetUsersList());

        // this.error$
        // .pipe(filter<string>(error => error === undefined))
        // .subscribe(error => console.log(error))

        // this.store.select<any>(UserSelector.getUserById(1)).subscribe(user=> console.log(user))
    }

    userSelected(selectedUser: User): void {
        this.selectedUser = selectedUser;
    }
}
