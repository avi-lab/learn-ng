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
        mergeMap((action: any) => this.usersService.getById(action.userId).pipe(
            map((user: User) => UsersActions.GetUserByIdSuccess({ user: user })),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.GetUserByIdFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    addUser$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.ActionTypes.ADD_USER),
        mergeMap((action: any) => this.usersService.add(action.user).pipe(
            map((user: User) => UsersActions.AddUserSuccess({ user: user })),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.AddUserFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    updateUser$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.ActionTypes.UPDATE_USER),
        mergeMap((action : any) => this.usersService.update(action.user).pipe(
            map((user: User) => UsersActions.UpdateUserSuccess({ user: user })),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.UpdateUserFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    deleteUser$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.ActionTypes.DELETE_USER),
        mergeMap((action : any) => this.usersService.delete(action.userId).pipe(
            map((userId: number) => UsersActions.DeleteUserSuccess({ userId: userId })),
            catchError((errorResponse: ErrorResponse) => {
                this.openDialog(errorResponse);
                return of(UsersActions.DeleteUserFailure({ errorResponse: errorResponse }));
            })
        ))
    ));

    constructor(private actions$: Actions, private usersService: UsersService, public dialog: MatDialog) { }

    openDialog(errorResponse: ErrorResponse) {       
        this.dialog.open(ErrorDialog, { data: errorResponse });
    }
}