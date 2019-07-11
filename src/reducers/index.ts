import { combineReducers } from 'redux';
import { usersReducer, UsersState } from './users';

export interface StoreState {
  users: UsersState;
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer
});