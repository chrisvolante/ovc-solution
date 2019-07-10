import { FetchUsersAction } from './users';

export enum ActionTypes {
  fetchUsers = 'FETCH_USERS'
}

export type Action = FetchUsersAction;