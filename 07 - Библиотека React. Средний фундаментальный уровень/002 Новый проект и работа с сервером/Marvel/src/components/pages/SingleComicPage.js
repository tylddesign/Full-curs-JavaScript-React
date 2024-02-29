import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './singleComicPage.scss';

const SingleComicPage = (props) => {
    const { comicId } = useParams();

    const [comic, setComic] = useState([]);

    const { error, loading, getComic, clearError } = useMarvelService();

    useEffect(() => {
        updateComic();
    }, [comicId])

    const updateComic = () => {
        clearError();

        getComic(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic1 => comic);
    }

    const errorMessage = error === true ? <ErrorMessage /> : null;
    const spinner = loading === true ? <Spinner /> : null;
    const content = !(errorMessage || spinner || !comic) ? <View comic={comic} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({ comic }) => {
    const { title, description, pageCount, thumbnail, language, price } = comic;
    return (
        <>
            <AppBanner />
            <div className="single-comic">
                <img src={thumbnail} alt="x-men" className="single-comic__img" />
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pageCount}</p>
                    <p className="single-comic__descr">Language: {language}</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to="/comics" className="single-comic__back">Back to all</Link>
            </div>
        </>
    )
}

export default SingleComicPage;