import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/store/users/users.model';

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details.component.html',
    styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {

    @Input()
    selectedUser: User = {
        id: 0,
        name: ""
    };
}
