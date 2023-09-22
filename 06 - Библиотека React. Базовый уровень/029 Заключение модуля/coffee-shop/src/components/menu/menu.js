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
            <section className="menu" >
                <a href="#" className="menu__logo">
                    <img src="../../img/logo/logo.svg" alt="logo" />
                    Coffee house
                </a>
            </section>

        );
    }

}

export default Menu;