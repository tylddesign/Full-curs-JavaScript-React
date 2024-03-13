import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
    const [char, setChar] = useState(null);

    const { getCharacter, clearError, process, setProcess } = useMarvelService(); // таким образом мы будем создавать новое свойство у RandomChar

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(response => setChar(response))
            .then(() => setProcess('confirmed'))
    }

    return (
        <div className="randomchar">
            {setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}

const View = ({ data }) => {
    const _descMessage = 'Описания для этого персонажа ещё не добавлено';

    const { name, description, thumbnail, homepage, wiki } = data;

    const validateDescription = (desc) => {
        if (desc) {
            return desc.slice(0, 200) + "...";
        }
        return _descMessage;
    }

    return (
        <div className="randomchar__block">
            <img src={thumbnail}
                style={{ objectFit: `${thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "contain" : "cover"}` }}
                alt="Random character"
                className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {validateDescription(description)}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;