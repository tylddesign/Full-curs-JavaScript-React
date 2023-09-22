import { Component } from 'react';
import Menu from '../menu/menu';
import Header from '../header/header';
import About from '../about/about';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Header />
      </div>

    );
  }
}

export default App;
