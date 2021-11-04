import { createAction, props } from '@ngrx/store';
import { ErrorResponse } from '../store.model';
import { User } from './user.model';

export enum ActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USER_BY_ID = 'GET_USERS_BY_ID',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_SUCCESS',
}

export const GetUsersList = createAction(ActionTypes.GET_USERS);

// export const GetUserById = createAction(ActionTypes.GET_USER_BY_ID,  props<{ userId: number }>());

export const GetUsersListSuccess = createAction(
    ActionTypes.GET_USERS_SUCCESS, props<{ users: Array<User> }>()
);

export const GetUsersListFailure = createAction(
    ActionTypes.GET_USERS_FAILURE, props<{ errorResponse: ErrorResponse }>()
);