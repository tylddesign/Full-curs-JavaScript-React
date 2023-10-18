import { Component } from 'react'
import { Link } from 'react-router-dom';

import './catalog-cards.scss'
import '../our-best/our-best.scss'

class CatalogCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsData: [
                { src: 'img/our-best/catalog1.png', alt: 'AROMISTICO Coffee 1 kg', title: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: 10.73, id: 1 },
                { src: 'img/our-best/catalog1.png', alt: 'Nescafe', title: 'Nescafe', country: "Kenya", price: 10.73, id: 2 },
                { src: 'img/our-best/catalog1.png', alt: 'AROMISTICO Coffee 1 kg', title: 'AROMISTICO Coffee 1 kg', country: "Columbia", price: 10.73, id: 3 },
                { src: 'img/our-best/catalog1.png', alt: 'AROMISTICO Coffee 1 kg', title: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: 10.73, id: 4 },
                { src: 'img/our-best/catalog1.png', alt: 'AROMISTICO Coffee 1 kg', title: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: 10.73, id: 5 },
                { src: 'img/our-best/catalog1.png', alt: 'AROMISTICO Coffee 1 kg', title: 'AROMISTICO Coffee 1 kg', country: "Brazil", price: 10.73, id: 6 },
            ],
            term: 'Nes'
        }
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterCatalog = (term) => {
        if (term.length === 0) {
            return this.state.cardsData;
        }
        return this.state.cardsData.filter(item => {
            return item.title.includes(term) === true;
        })
    }

    renderData = (term) => {
        let catalogItem = this.filterCatalog(term);

        return catalogItem.map(({ src, alt, title, country, price, id }) => {
            return (
                <Link to="/card" key={id}>
                    <div className="catalog-item" >
                        <img src={src} alt={alt} className="catalog-item__img" />
                        <div className="catalog-item__title">{title}</div>
                        <div className="catalog-item__country">{country}</div>
                        <div className="catalog-item__price">{price}$</div>
                    </div>
                </Link>
            )
        });
    }

    render() {
        let visibleData = this.renderData(this.state.term);

        return (
            <section className="catalog-cards">
                <div className="catalog__wrapper container">
                    {visibleData}
                </div>
            </section>
        )
    }
}

export default CatalogCards;