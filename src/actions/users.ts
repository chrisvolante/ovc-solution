import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);
        
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data
    });
  };
};