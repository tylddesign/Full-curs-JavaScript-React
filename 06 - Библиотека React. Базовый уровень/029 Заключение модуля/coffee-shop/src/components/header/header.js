import { Component } from 'react';

import Menu from '../menu/menu'

import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section className="header">
                <Menu />
                <span>322</span>
            </section>

        );
    }
}

export default Header;