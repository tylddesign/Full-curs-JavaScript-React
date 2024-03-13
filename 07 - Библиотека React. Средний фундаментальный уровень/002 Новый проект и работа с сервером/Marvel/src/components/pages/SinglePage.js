import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import AppBanner from "../appBanner/AppBanner";
import setContent from '../../utils/setContent';

import './singleComicPage.scss';

const SinglePage = ({ dataType, Component }) => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const { getComic, getCharacter, clearError, process, setProcess } = useMarvelService();

    useEffect(() => {
        switch (dataType) {
            case 'comic':
                clearError();
                getComic(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            case 'character':
                clearError();
                getCharacter(id)
                    .then(onDataLoaded)
                    .then(() => setProcess('confirmed'));
                break;
            default:
                console.log('Нет свопадений');
        }
    }, [id])

    const onDataLoaded = (data) => {
        setData(() => data);
    }

    return (
        <>
            <AppBanner />
            {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;