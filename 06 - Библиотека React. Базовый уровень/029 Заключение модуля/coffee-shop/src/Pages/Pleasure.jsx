import AboutOur from '../components/about-our-beans/about-our';
import Header from '../components/header/header';

const Pleasure = () => {
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
            < Header
                title="For yours pleasure"
                srcBgImg="../../img/pleasure/bg.png"
            />
            <AboutOur
                imgSrc="img/pleasure/coffee.png"
                altImg="girls with cup of cofee"
                h2="About our beans"
                article={article}
            />
        </>
    )
}

export { Pleasure };