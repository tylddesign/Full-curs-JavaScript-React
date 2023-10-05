import { Component } from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

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
                    <Link to="/">
                        <img src={this.toLogoPath()} alt="logo" />
                        Coffee house
                    </Link>
                </li>
                <li><Link to="/catalog">Our cofee</Link></li>
                <li><Link to="/pleasure">For your pleasure</Link></li>
            </menu>

        );
    }

}

export default Menu;