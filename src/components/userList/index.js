import React, { Component } from 'react';
import ListItem from './ListItem';

const dbData = [
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
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userName: 'unknown',
      // isGreetMode: true,
      users: dbData.map((u) => ({ ...u, isSelected: false })),
    };
  }
  userMap = (user, index) => {
    const { users } = this.state;
    const selectedUser = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({
        users: newUsers,
      });
    };
    return <ListItem key={user.id} user={user} onSelect={selectedUser} />;
  };
  render() {
    const { users } = this.state;
    return <ul>{users.map(this.userMap)}</ul>;
  }
}
export default UserList;
