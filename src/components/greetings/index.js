import React, { Component } from 'react';

const Greeting = (props) => {
  const { name, isGreet = true } = props;
  return (
    <div>
      {isGreet ? 'Hello' : 'Bye'} {name}
    </div>
  );
};

export default Greeting;
