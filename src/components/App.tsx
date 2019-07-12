import React from 'react';
import { connect } from 'react-redux';
import { User, fetchUsers } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  users: StoreState['users'];
  fetchUsers: Function;
}

interface AppState{
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = { fetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.users.users.length && this.props.users.users.length) {
      this.setState({ fetching:false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchUsers();
    this.setState({ fetching: true });
  };

  renderUserTable(users: User[]): JSX.Element {
    const userRow = users.map((user) => {
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
        {this.state.fetching && !this.props.users.isLoaded && 'Loading'}
        {this.props.users.isLoaded && this.renderUserTable(this.props.users.users)}
      </div>
    );
  }
}

const mapStateToProps = ({ users }: StoreState) => {
  return { users };
}

export const App = connect(
  mapStateToProps,
  { fetchUsers }
)(_App);