import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/store/user/user.model';
import { UsersState } from 'src/app/core/store/user/user.reducer';
import * as UsersActions from 'src/app/core/store/user/user.actions';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    @Input()
    users!: Array<User>;

    public selectionChanged: Subject<void> = new Subject();

    selectedOptions: any;

    @Output()
    selectedUser = this.selectionChanged.pipe(
        map(() => this.selectedOptions[0])
    );

    constructor(public dialog: MatDialog) { }

    addUser(){
        this.dialog.open(UserAddComponent);
    }
}
