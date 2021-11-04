import { ActionReducerMap } from "@ngrx/store";
import * as UserReducer from "./users/user.reducer";

export interface AppState {
    users: UserReducer.UsersState;
}

export const APP_REDUCER: ActionReducerMap<AppState> = {
    users: UserReducer.userReducer
}