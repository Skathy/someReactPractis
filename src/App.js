import React, { Component } from 'react';
import Greeting from './components/greetings';
/*
function App() {
  return <Greet name="Ivan the Fool" />;
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'unknown',
      isGreetMode: true,
    };
  }
  changeMode = () => {
    const { isGreetMode } = this.state;
    this.setState({
      isGreetMode: !isGreetMode,
    });
  };
  render() {
    const { userName, isGreetMode } = this.state;
    return (
      <>
        <button onClick={this.changeMode}>Mode</button>
        <Greeting name={userName} isGreet={isGreetMode} />
      </>
    );
  }
}

export default App;
