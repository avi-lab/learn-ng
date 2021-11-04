import { Injectable } from "@angular/core";
import { of, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UsersService {

    getAll() {
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
}
