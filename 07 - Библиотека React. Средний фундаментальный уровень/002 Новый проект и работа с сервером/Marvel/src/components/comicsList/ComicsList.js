import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

const ComicsList = () => {

    const { loading, error, getAllComics } = useMarvelService();

    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);



    useEffect(() => {
        onRequest();
    }, [])

    const onRequest = () => {
        getAllComics(offset)
            .then(onComicsLoadded);
    }

    const onComicsLoadded = (newComicsList) => {
        if (newComicsList.length < 8) {
            setComicsEnded(true);
        }

        setComics(comics => [...comics, ...newComicsList]);
        setOffset(offset => offset + 8);

    }

    const renderItems = (arr) => {
        const items = arr.map((comic, i) => {
            return (
                <li className="comics__item" key={i}>
                    <Link to={`/comics/${comic.id}`}>
                        <img src={comic.thumbnail} alt="ultimate war" className="comics__item-img" />
                        <div className="comics__item-name">{comic.title}</div>
                        <div className="comics__item-price">{comic.price}</div>
                    </Link>
                </li>
            )
        })
        return items;
    }

    const items = renderItems(comics);

    const errorMessage = error === true ? <ErrorMessage /> : null;
    const spinner = loading === true ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {spinner}
            {errorMessage}
            <ul className="comics__grid">
                {items}
            </ul>
            <button
                className="button button__main button__long"
                disabled={loading}
                style={{ 'display': comicsEnded ? 'none' : 'block' }}
            >
                <div
                    className="inner"
                    onClick={() => onRequest(offset)}
                >load more</div>
            </button>
        </div >
    )
}

export default ComicsList;