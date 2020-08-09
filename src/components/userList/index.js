import React, { Component } from 'react';
import ListItem from './ListItem';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userName: 'unknown',
      // isGreetMode: true,
      users: [
        {
          id: 1,
          fname: 'fisrtname1',
          lname: 'lastname1',
        },
        {
          id: 2,
          fname: 'firstname2',
          lname: 'lastname2',
        },
        {
          id: 3,
          fname: 'firstname3',
          lname: 'lastname3',
        },
        {
          id: 4,
          fname: 'firstname4',
          lname: 'lastname4',
        },
      ],
    };
  }
  userMap = (user) => {
    return <ListItem key={user.id} user={user} />;
  };
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.userMap)}</ul>;
  }
}
export default UserList;
