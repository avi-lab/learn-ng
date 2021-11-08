import { createAction, props } from '@ngrx/store';
import { ErrorResponse } from '../store.model';
import { User } from './user.model';

export enum ActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_FAILURE',

    GET_USER_BY_ID = 'GET_USERS_BY_ID',
    GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS',
    GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE',

    ADD_USER = 'ADD_USER',
    ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
    ADD_USER_FAILURE = 'ADD_USER_FAILURE',

    UPDATE_USER = 'UPDATE_USER',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',

    DELETE_USER = 'DELETE_USER',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE = 'DELETE_USER_FAILURE',
}

export const GetUsersList = createAction(ActionTypes.GET_USERS);

export const GetUsersListSuccess = createAction(
    ActionTypes.GET_USERS_SUCCESS, props<{ users: Array<User> }>()
);

export const GetUsersListFailure = createAction(
    ActionTypes.GET_USERS_FAILURE, props<{ errorResponse: ErrorResponse }>()
);

export const GetUserById = createAction(
    ActionTypes.GET_USER_BY_ID, props<{ userId: number }>()
);

export const GetUserByIdSuccess = createAction(
    ActionTypes.GET_USER_BY_ID_SUCCESS, props<{ user: User }>()
);

export const GetUserByIdFailure = createAction(
    ActionTypes.GET_USER_BY_ID_FAILURE, props<{ errorResponse: ErrorResponse }>()
);

export const AddUser = createAction(
    ActionTypes.ADD_USER, props<{ user: User }>()
);

export const AddUserSuccess = createAction(
    ActionTypes.ADD_USER_SUCCESS, props<{ user: User }>()
);

export const AddUserFailure = createAction(
    ActionTypes.ADD_USER_FAILURE, props<{ errorResponse: ErrorResponse }>()
);

export const UpdateUser = createAction(
    ActionTypes.UPDATE_USER, props<{ user: User }>()
);

export const UpdateUserSuccess = createAction(
    ActionTypes.UPDATE_USER_SUCCESS, props<{ user: User }>()
);

export const UpdateUserFailure = createAction(
    ActionTypes.UPDATE_USER_FAILURE, props<{ errorResponse: ErrorResponse }>()
);

export const DeleteUser = createAction(
    ActionTypes.DELETE_USER, props<{ userId: number }>()
);

export const DeleteUserSuccess = createAction(
    ActionTypes.DELETE_USER_SUCCESS, props<{ userId: number }>()
);

export const DeleteUserFailure = createAction(
    ActionTypes.DELETE_USER_FAILURE, props<{ errorResponse: ErrorResponse }>()
);
