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

    on(UsersAction.GetUserById, (state) => state),
    on(UsersAction.GetUserByIdSuccess, (state, { user }) => {
        let users = state.data;
        if (users.some(u => u.id === user.id)) {
            let userIndex = users.findIndex(u => u.id === user.id);

            users[userIndex] = user;
        }

        return ({ ...state, data: [...state.data, user] });
    }),
);

