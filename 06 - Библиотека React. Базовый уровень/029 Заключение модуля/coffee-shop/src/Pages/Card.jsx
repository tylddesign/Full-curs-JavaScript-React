import Header from '../components/header/header'
import CatalogCard from '../components/catalog-card/catalog-card'

const Card = () => {

    return (
        <>
            <Header
                title='Our Coffee'
                srcBgImg="../../img/our-coffee/bg.png"
            />
            <CatalogCard />
        </>
    );

}

export { Card };