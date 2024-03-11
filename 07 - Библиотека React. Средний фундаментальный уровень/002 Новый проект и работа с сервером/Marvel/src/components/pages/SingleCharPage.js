<<<<<<< HEAD
import { useParams, useLocation } from 'react-router-dom';
=======
import { useParams } from 'react-router-dom';
>>>>>>> 98f3ad050cc9f4ca914721c8de2550b4fc297ffc
import { useState, useEffect } from 'react';

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './singleComicPage.scss';

const SingleCharPage = (props) => {
    const { characterId } = useParams();
    const [char, setChar] = useState(null);
    const { error, loading, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [characterId])

    const updateChar = () => {
        clearError();

        getCharacter(characterId)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char1 => char);
    }

    const errorMessage = error === true ? <ErrorMessage /> : null;
    const spinner = loading === true ? <Spinner /> : null;
    const content = !(errorMessage || spinner || !char) ? <View char={char} /> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({ char }) => {
    const { name, description, thumbnail } = char;
    return (
        <>
            <AppBanner />
            <div className="single-comic">
                <img src={thumbnail} alt="x-men" className="single-comic__img" />
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{name.toUpperCase()}</h2>
                    <p className="single-comic__descr">{description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleCharPage;