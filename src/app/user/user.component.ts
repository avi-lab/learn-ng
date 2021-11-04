import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUsersList } from '../core/store/user/user.actions';
import { User } from '../core/store/user/user.model';
import { UsersState } from '../core/store/user/user.reducer';
import * as UserSelector from '../core/store/user/user.selectors';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    selectedUser!: User;

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
