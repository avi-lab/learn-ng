import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/store/user/user.model';

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
}
