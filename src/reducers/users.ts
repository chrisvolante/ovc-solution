import { User, Action, ActionTypes } from '../actions';

export const usersReducer = (
  state: User[] = [], 
  action: Action
  ) => {
    switch (action.type) {
      case ActionTypes.fetchUsers:
        return action.payload;
      default:
        return state;
    }
};