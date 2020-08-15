import React from 'react';
//import './userListStyle.css';

const ListItem = (props) => {
  const {
    isSelected,
    onSelect,
    user: { id, fname, lname },
  } = props;
  const styles = { color: `rgb(233, 123, 123)` };
  return (
    <li style={styles}>
      <span>
        UserID: {id} UserFullName:{fname} {lname}
      </span>
      <button onClick={onSelect}>Select</button>
    </li>
  );
};

export default ListItem;
