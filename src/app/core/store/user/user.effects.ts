import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ErrorDialog } from '../../dialogs/error-dialog/error-dialog.component';
import { ErrorResponse } from '../store.model';
import * as UsersActions from './user.actions';
import { User } from './user.model';
import { UsersService } from './user.service';

@Injectable()
export class UsersEffect {

    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.ActionTypes.GET_USERS),
        mergeMap(() => this.usersService.getAll().pipe(
            map((users: Array<User>) => UsersActions.GetUsersListSuccess({ users: users })),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.GetUsersListFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    loadUserById$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.ActionTypes.GET_USER_BY_ID),
        mergeMap(userId => this.usersService.getById(userId).pipe(
            map((user: User) => {
                console.log("loadUserById");
                
                return UsersActions.GetUserByIdSuccess({ user: user });
            }),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.GetUserByIdFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    addUser$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.ActionTypes.ADD_USER),
        mergeMap((user: any) => this.usersService.add(user.user).pipe(
            map((user: User) => {
                console.log("addUser");
                return UsersActions.AddUserSuccess({ user: user });
            }),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.GetUserByIdFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    constructor(private actions$: Actions, private usersService: UsersService, public dialog: MatDialog) { }

    openDialog(errorResponse: ErrorResponse) {       
        this.dialog.open(ErrorDialog, { data: errorResponse });
    }
}