import { Component } from 'react';

import Menu from '../menu/menu';

import './main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <section className="main">
                <div className="container">
                    <Menu />
                    <center className="main__container">
                        <h1 className="main__header">Everything You Love About Coffee</h1>
                        <div className="header__logo">
                            <img src="img/logo/beans-logo.svg" alt="Логотип" />
                        </div>
                        <h2>We makes every day full of energy and taste</h2>
                        <h2>Want to try our beans?</h2>
                        <button className="main__btn">More</button>
                    </center>
                </div>
            </section>

        );
    }
}

export default Main;