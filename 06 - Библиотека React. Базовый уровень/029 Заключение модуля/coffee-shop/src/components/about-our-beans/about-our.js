import { Component } from 'react';

import './about-our.scss';

class AboutOur extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // insertArticle = (article) => {
    //     console.log('Start insert');
    //     const art = document.getElementById('article');
    //     console.log(art);
    //     art.innerHTML(article);
    // }

    createMarkup = () => {
        const { article } = this.props;
        return { __html: article };
    }

    render() {
        const { imgSrc, altImg, h2, article } = this.props;

        return (
            <>
                <section className="about-our">
                    <div className="container">
                        <div className="about-our__wrapper">
                            <div>
                                <img src={imgSrc} alt={altImg} className="about-our__img" />
                            </div>
                            <div className="about-our__content">
                                <h2>{h2}</h2>
                                <img src="img/logo/beans-logo-black.svg" alt="logo" className="footer__logo" />
                                <article dangerouslySetInnerHTML={{ __html: article }}>
                                </article>
                            </div>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}

export default AboutOur;