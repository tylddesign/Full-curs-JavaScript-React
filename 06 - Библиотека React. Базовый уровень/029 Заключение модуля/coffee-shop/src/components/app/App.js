import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Pages/Home';
import { Catalog } from '../../Pages/Catalog';
import { Card } from '../../Pages/Card';
import { Pleasure } from '../../Pages/Pleasure';

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
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/card" element={<Card />} />
          <Route path="/pleasure" element={<Pleasure />} />
        </Routes>
        <Footer />
      </>

    );
  }
}

export default App;
