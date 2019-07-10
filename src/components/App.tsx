import React from 'react';
import { connect } from 'react-redux';
import { User, fetchUsers } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  users: User[];
  fetchUsers: Function;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchUsers();
  };

  renderUserTable(): JSX.Element {
    const userRow = this.props.users.map((user: User): JSX.Element => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{userRow}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>
          Generate Table of Users
        </button>
        {this.renderUserTable()}
      </div>
    );
  }
}

const mapStateToProps = ({ users }: StoreState): { users: User[] } => {
  return { users };
}

export const App = connect(
  mapStateToProps,
  { fetchUsers }
)(_App);