import { Component } from 'react';

import './menu.scss';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <menu className="menu" >
                <li href="#" className="menu__logo">
                    <img src="img/logo/coffee-beans.svg" alt="logo" />
                    Coffee house
                </li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </menu>

        );
    }

}

export default Menu;