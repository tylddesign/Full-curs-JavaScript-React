import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';



import './menu.scss';

import { Home } from '../../Pages/Home';
import { Catalog } from '../../Pages/Catalog';
import { Card } from '../../Pages/Card';
import { Pleasure } from '../../Pages/Pleasure';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    toLogoPath = () => {
        let logoPath = 'img/logo/coffee-beans.svg';
        if (this.props.logo === 'black') {
            logoPath = 'img/logo/coffee-beans-black.svg';
        }
        return logoPath;
    }

    render() {

        return (
            <menu className="menu" >
                <li className="menu__logo">
                    <img src={this.toLogoPath()} alt="logo" />
                    Coffee house
                </li>
                <li>Our cofee</li>
                <li>For your pleasure</li>
                {/* <Link href="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link href="/card">Card</Link>
                <Link href="/pleasure">Pleasure</Link> */}
                <Routes>
                    <Route path="/" elem={<Home />} />
                    <Route path="/catalog" elem={<Catalog />} />
                    <Route path="/card" elem={<Card />} />
                    <Route path="/pleasure" elem={<Pleasure />} />
                </Routes>
            </menu>

        );
    }

}

export default Menu;