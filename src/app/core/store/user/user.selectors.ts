import { createSelector, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from './user.model';
import { UsersState } from './user.reducer';

const getUsersState = (state: AppState) => state.users;

export const getAllUsers = createSelector(
    getUsersState,
    (state: UsersState) => state.data
);

export const getFailure = createSelector(
    getUsersState,
    (state: UsersState) => state.errorResponse
);

export const getUserById = (userId: number) => createSelector(
    getAllUsers,
    (users: Array<User>) => {
        const user = users.find(user => user.id === userId);
        if(!user) throw new Error("user not found");
        
        return user;
    }
);

