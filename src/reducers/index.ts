import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { User } from '../actions';

export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer
});