import { createReducer, on } from '@ngrx/store';
import { ErrorResponse } from '../store.model';
import * as UsersAction from './user.actions';
import { User } from './user.model';

export interface UsersState {
    data: Array<User>;
    loading: boolean;
    errorResponse: ErrorResponse;
}

const initialState: UsersState = {
    data: [],
    loading: false,
    errorResponse: {
        code: '',
        message: ''
    }
};

export const userReducer = createReducer(
    initialState,

    on(UsersAction.GetUsersList, (state) => state),
    on(UsersAction.GetUsersListSuccess, (state, { users }) => ({ ...state, data: users, loading: true })),
    on(UsersAction.GetUsersListFailure, (state, { errorResponse }) => ({ ...state, loading: false, errorResponse: errorResponse })),

    on(UsersAction.AddUser, (state) => state),
    on(UsersAction.AddUserSuccess, (state, { user }) => ({ ...state, data: [...state.data, user] })),
    on(UsersAction.AddUserFailure, (state, { errorResponse }) => ({ ...state, loading: false, errorResponse: errorResponse })),

    on(UsersAction.UpdateUser, (state) => state),
    on(UsersAction.UpdateUserSuccess, (state, { user }) => ({ ...state, data: updateUser(state.data, user) })),
    on(UsersAction.UpdateUserFailure, (state, { errorResponse }) => ({ ...state, loading: false, errorResponse: errorResponse })),

    on(UsersAction.DeleteUser, (state) => state),
    on(UsersAction.DeleteUserSuccess, (state, { userId }) => ({ ...state, data: removeUser(state.data, userId) })),
    on(UsersAction.DeleteUserFailure, (state, { errorResponse }) => ({ ...state, loading: false, errorResponse: errorResponse })),

    on(UsersAction.GetUserById, (state) => state),
    on(UsersAction.GetUserByIdSuccess, (state, { user }) => ({ ...state, data: updateUser(state.data, user) })),
    on(UsersAction.GetUserByIdFailure, (state, { errorResponse }) => ({ ...state, loading: false, errorResponse: errorResponse })),
);

function updateUser(data: Array<User>, user: User) {
    let users = data;
    if (users.some(existingUser => existingUser.id === user.id)) {
        users = removeUser(users, user.id);
    }

    return [...users, user];
}

function removeUser(users: Array<User>, userId: number) {
    return users.filter(user => user.id !== userId);
}