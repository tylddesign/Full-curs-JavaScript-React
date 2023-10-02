import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Main from '../main/main';
import About from '../about/about';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import './App.scss';
import { Home } from '../../Pages/Home';
import { Catalog } from '../../Pages/Catalog';
import { Pleasure } from '../../Pages/Pleasure';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        {/* <header>
          <Link to='/'>Home</Link>
          <Link to='/catalog'>Catalog</Link>
          <Link to='/pleasure'>Pleasure</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/pleasure" element={<Pleasure />} />
        </Routes> */}
        <Main />
        <About />
        <OurBest />
        <Footer />
      </div>

    );
  }
}

export default App;
