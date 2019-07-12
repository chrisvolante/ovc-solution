import { User, Action, ActionTypes } from '../actions';

export interface UsersState {
  users: User[];
  isLoaded: boolean;
}

const initialState: UsersState = {
  users: [],
  isLoaded: false
}

export const usersReducer = (
  state: UsersState = initialState, 
  action: Action
  ) => {
    switch (action.type) {
      case ActionTypes.fetchUsers:
        return {
          users: action.payload,
          isLoaded: true
        };
      default:
        return state;
    }
};