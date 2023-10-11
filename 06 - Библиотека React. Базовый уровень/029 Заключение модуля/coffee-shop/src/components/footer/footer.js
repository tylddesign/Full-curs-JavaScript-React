import { Component } from 'react';

import Menu from '../menu/menu';


import './footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <section className="footer">
                <Menu logo="black" />
                <img src="img/logo/beans-logo-black.svg" alt="logo" className="footer__logo" />
            </section>

        );
    }
}

export default Footer;