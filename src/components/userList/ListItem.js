import React from 'react';
//import './userListStyle.css';

const ListItem = (props) => {
  const {
    isSelected,
    user: { id, fname, lname },
  } = props;
  const styles = { color: `rgb(255, 0, 0)` };
  return (
    <li style={styles}>
      UserID: "{id}"; UserFullName:"{fname} {lname}";
    </li>
  );
};

export default ListItem;
