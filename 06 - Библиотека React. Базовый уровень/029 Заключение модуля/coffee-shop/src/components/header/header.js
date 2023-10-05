import { Component } from 'react';
import Menu from '../../components/menu/menu'


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
                <div className="container">
                    <Menu />
                    <h1>{this.props.title}</h1>
                </div>
            </section>
        )
    }

}

export default Header;