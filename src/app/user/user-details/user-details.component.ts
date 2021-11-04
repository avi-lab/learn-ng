import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/store/user/user.model';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

    @Input()
    selectedUser!: User;
}
