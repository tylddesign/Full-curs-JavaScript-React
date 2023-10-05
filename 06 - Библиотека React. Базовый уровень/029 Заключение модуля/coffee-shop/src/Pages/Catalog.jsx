import Header from '../components/header/header';
import AboutOurBeans from '../components/about-our-beans/about-our-beans';
import CatalogFilter from '../components/catalog-filter/catalog-filter';
import CatalogCards from '../components/catalog-cards/catalog-cards';

const Catalog = () => {
    return (
        <>
            <Header title='Our Coffee' />
            <AboutOurBeans />
            <hr style={{
                width: 240,
            }} />
            <CatalogFilter />
            <CatalogCards />
        </>
    )
}

export { Catalog };