import { useParams } from 'react-router-dom';
import { useState, useEffect, Component } from 'react';

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';


import './singleComicPage.scss';

const SinglePage = ({ dataType, Component }) => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const { error, loading, getComic, getCharacter, clearError } = useMarvelService();

    console.log(data);

    useEffect(() => {
        switch (dataType) {
            case 'comic':
                clearError();
                getComic(id)
                    .then(onDataLoaded)
                break;
            case 'character':
                clearError();
                getCharacter(id)
                    .then(onDataLoaded)
                break;
            default:
                console.log('Нет свопадений');
        }
    }, [id])

    const onDataLoaded = (data) => {
        setData(dataPage => data);
    }

    const errorMessage = error === true ? <ErrorMessage /> : null;
    const spinner = loading === true ? <Spinner /> : null;
    const content = !(errorMessage || spinner || !data) ? <Component data={data} /> : null;

    return (
        <>
            <AppBanner />
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default SinglePage;