import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/spinner';
import Skeleton from '../skeleton/Skeleton';



import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const { error, loading, getCharacter, clearError } = useMarvelService(); // таким образом мы будем создавать новое свойство у RandomChar

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const updateChar = () => {
        clearError();
        const { charId } = props;
        if (!charId) {
            return;
        }
        getCharacter(charId)
            .then(response => setChar(response))
    }

    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error === true ? <ErrorMessage /> : null;
    const spinner = loading === true ? <Spinner /> : null;
    const content = !(errorMessage || spinner || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail}
                    style={{ objectFit: `${thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "fill" : "cover"}` }}
                    alt="abyss" />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">Homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        if (i > 9) {
                            return;
                        }
                        return (
                            <li className="char__comics-item" key={i}>
                                {item.name}
                            </li>
                        )
                    })
                }

            </ul>
        </>

    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;