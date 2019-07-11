import { User, Action, ActionTypes } from '../actions';

export type UsersState = User[] | 'notLoaded';

export const usersReducer = (
  state: UsersState = [], 
  action: Action
  ) => {
    switch (action.type) {
      case ActionTypes.fetchUsers:
        return action.payload;
      default:
        return state;
    }
};