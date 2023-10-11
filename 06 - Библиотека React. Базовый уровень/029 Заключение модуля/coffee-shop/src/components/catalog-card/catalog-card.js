import { Component } from 'react';

import './catalog-card.scss';

class CatalogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="catalog-card">
                <div className="container">
                    <div className="catalog-card__wrapper">
                        <div className="catalog-card__img">
                            <img src="img/card/card.png" alt="coffee" />
                        </div>
                        <div className="catalog-card__content">
                            <h2>About it</h2>
                            <img src="img/logo/beans-logo-black.svg" alt="logo" className="footer__logo" />
                            <div className="catalog-card__country" ><b>Country:</b> Brasil</div>
                            <div className="catalog-card__description" ><b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className="catalog-card__price" ><b>Price:</b>&nbsp;&nbsp;<span>16.99$</span></div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default CatalogCard;