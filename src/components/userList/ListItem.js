import React from 'react';

const ListItem = (props) => {
  const {
    user: { id, fname, lname },
  } = props;

  return (
    <li>
      UserID: "{id}"; UserFullName:"{fname} {lname}";
    </li>
  );
};

export default ListItem;
