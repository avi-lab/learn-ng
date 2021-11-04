import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/store/users/user.model';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

    @Input()
    users: Array<User> = [];

    public selectionChanged: Subject<void> = new Subject();

    selectedOptions: any;

    @Output()
    selectedUser = this.selectionChanged.pipe(
        map(() => this.selectedOptions[0])
    );

    constructor() { }

    ngOnInit(): void {
    }
}
