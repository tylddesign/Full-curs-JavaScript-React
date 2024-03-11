import { Link } from 'react-router-dom';

import AppBanner from "../appBanner/AppBanner";

const SinglePageLayout = (props) => {
    const { title, description, pageCount, thumbnail, language, price, name } = props.data;
    const dataType = props.dataType;
    return (
        <>
            <AppBanner />
            <div className="single-comic">
                {dataType === 'comic' ?
                    (
                        <>
                            <img src={thumbnail} alt="x-men" className="single-comic__img" />
                            <div className="single-comic__info">
                                <h2 className="single-comic__name">{title}</h2>
                                <p className="single-comic__descr">{description}</p>
                                <p className="single-comic__descr">{pageCount}</p>
                                <p className="single-comic__descr">Language: {language}</p>
                                <div className="single-comic__price">{price}</div>
                            </div>
                            <Link to="/comics" className="single-comic__back">Back to all</Link>
                        </>

                    )
                    :
                    (
                        <>
                            <img src={thumbnail} alt="x-men" className="single-comic__img" />
                            <div className="single-comic__info">
                                <h2 className="single-comic__name">{name}</h2>
                                <p className="single-comic__descr">{description}</p>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default SinglePageLayout;