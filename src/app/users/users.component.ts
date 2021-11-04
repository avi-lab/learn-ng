import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { GetUsersList } from '../core/store/users/users.actions';
import { User } from '../core/store/users/users.model';
import { UsersState } from '../core/store/users/users.reducer';
import * as UserSelector from '../core/store/users/users.selectors';

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
    error$ = this.store.select<any>(UserSelector.getFailure);

    constructor(private store: Store<UsersState>) { }

    ngOnInit(): void {
        this.store.dispatch(GetUsersList());

        this.error$
        .pipe(filter<string>(error => error === ''))
        .subscribe(error => console.log(error))

        // this.store.select<any>(UserSelector.getUserById(1)).subscribe(user=> console.log(user))
    }

    userSelected(selectedUser: User): void {
        this.selectedUser = selectedUser;
    }
}


// @Component({
//     selector: 'dialog-elements-example-dialog',
//     template: `
//         <h1 mat-dialog-title>Dialog with elements</h1>
//         <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
//         <div mat-dialog-actions>
//             <button mat-button mat-dialog-close>Close</button>
//         </div>
//     `,
//   })
//   export class DialogElementsExampleDialog {}