import { Component } from 'react';

import './about-our-beans.scss';

class AboutOurBeans extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <section className="about-our-beans">
                    <div className="container">
                        <div className="about-our-beans__wrapper">
                            <img src="img/our-coffee/about-our-beans.jpg" alt="about our beans" className="about-our-beans__img" />
                            <div className="about-our-beans__content">
                                <h2>About our beans</h2>
                                <img src="img/logo/beans-logo-black.svg" alt="logo" className="footer__logo" />
                                <article>
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br />
                                    <br />
                                    Afraid at highly months do things on at. Situation recommend objection do intention<br />
                                    so questions.<br />
                                    As greatly removed calling pleased improve an. Last ask him cold feel<br />
                                    met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                                    is song that held help face.
                                </article>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default AboutOurBeans;