import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/store/user/user.model';
import { UsersState } from 'src/app/core/store/user/user.reducer';
import * as UsersActions from 'src/app/core/store/user/user.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

    @Input()
    selectedUser!: User;

    profileForm = new FormGroup({
        id: new FormControl({ value: '', disabled: true }),
        name: new FormControl('', Validators.required)
    });

    constructor(private store: Store<UsersState>) { }

    ngOnChanges() {
        this.profileForm.patchValue(this.selectedUser);
    }

    update() {
        this.store.dispatch(UsersActions.UpdateUser({
            user: Object.assign({}, this.selectedUser, this.profileForm.value)
        }));
    }
}
