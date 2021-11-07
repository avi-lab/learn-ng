import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class UsersService {

    getAll(): Observable<Array<User>> {
        let errorResponse = {
            code: 'code 1',
            message: 'this is an error message '
        };

        // return throwError(() => errorResponse);

        return of(
            [{
                id: 1,
                name: "faouzi"
            },
            {
                id: 2,
                name: "majdi"
            }]
        );
    }

    getById(userId: number): Observable<User> {
        return of({
            id: 3,
            name: "salah"
        });
    }

    add(user: User): Observable<User> {
        return of(user);
    }
}
