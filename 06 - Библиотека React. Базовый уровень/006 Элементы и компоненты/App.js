import { Component } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

const Field0 = () => {
  const styledField = {
    width: '300px'
  };
  return <input
    placeholder={holder}
    type='text'
    style={styledField} />
}

function Btn() {
  const text = 'Log in';
  // const res = () => {
  //   return 'Log in';
  // }
  // const p = <p>Log in</p>;
  const logged = false;
  return <button>{logged ? 'Enter' : text}</button>
}

//Классовые подход
class Field extends Component {
  render() {
    const styledField = {
      width: '300px'
    };
    const holder = 'Enter here';
    return <input
      placeholder={holder}
      type='text'
      style={styledField} />
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
