import Header from '../components/header/header';
import AboutOur from '../components/about-our-beans/about-our';
import CatalogFilter from '../components/catalog-filter/catalog-filter';
import CatalogCards from '../components/catalog-cards/catalog-cards';

const Catalog = () => {
    const article = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br />
    <br />
    Afraid at highly months do things on at. Situation recommend objection do intention<br />
    so questions.<br />
    As greatly removed calling pleased improve an. Last ask him cold feel<br />
    met spot shy want. Children me laughing we prospect answered followed. At it went<br />
    is song that held help face.
    `
    return (
        <>
            <Header
                title='Our Coffee'
                srcBgImg="../../img/our-coffee/bg.png"
            />
            <AboutOur
                imgSrc="img/our-coffee/about-our-beans.jpg"
                altImg="girls with cup of cofee"
                h2="About our beans"
                article={article}
            />
            <hr style={{
                width: 240,
            }} />
            <CatalogFilter />
            <CatalogCards />
        </>
    )
}

export { Catalog };