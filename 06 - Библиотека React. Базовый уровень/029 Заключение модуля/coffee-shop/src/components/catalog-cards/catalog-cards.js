import { Component } from 'react'
import { Link } from 'react-router-dom';

import './catalog-cards.scss'
import '../our-best/our-best.scss'

class CatalogCards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="catalog-cards">
                <div className="catalog__wrapper container">
                    <Link to="/card">
                        <div className="catalog-item">
                            <img src="img/our-best/catalog1.png" alt="Solimo Coffee Beans 2 kg" className="catalog-item__img" />
                            <div className="catalog-item__title">Solimo Coffee Beans 2 kg</div>
                            <div className="catalog-item__price">10.73$</div>
                        </div>
                    </Link>

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
            </section>
        )
    }
}

export default CatalogCards;