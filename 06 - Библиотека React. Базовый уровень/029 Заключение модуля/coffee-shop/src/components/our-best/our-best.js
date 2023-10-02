import { Component } from 'react';

import './our-best.scss';


class OurBest extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section className='our-best'>
                <h2>Our best</h2>
                <div className="catalog">
                    <div className="catalog__wrapper container">
                        <div className="catalog-item">
                            <img src="img/our-best/catalog1.png" alt="Solimo Coffee Beans 2 kg" className="catalog-item__img" />
                            <div className="catalog-item__title">Solimo Coffee Beans 2 kg</div>
                            <div className="catalog-item__price">10.73$</div>
                        </div>
                        <div className="catalog-item">
                            <img src="img/our-best/catalog2.png" alt="Presto Coffee Beans 1 kg" className="catalog-item__img" />
                            <div className="catalog-item__title">Solimo Coffee Beans 2 kg</div>
                            <div className="catalog-item__price">15.99$</div>
                        </div>
                        <div className="catalog-item">
                            <img src="img/our-best/catalog3.png" alt="Solimo Coffee Beans 2 kg" className="catalog-item__img" />
                            <div className="catalog-item__title">AROMISTICO Coffee 1 kg</div>
                            <div className="catalog-item__price">6.99$</div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default OurBest;