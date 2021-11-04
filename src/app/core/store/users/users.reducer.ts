import { createReducer, on } from '@ngrx/store';
import { ErrorResponse } from '../store.model';
import * as UsersAction from './users.actions';
import { User } from './users.model';

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
);

