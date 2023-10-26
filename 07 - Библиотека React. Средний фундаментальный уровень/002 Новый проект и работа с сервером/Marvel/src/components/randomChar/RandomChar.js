import { Component } from 'react';
import Spinner from '../spinner/spinner';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService(); // таким образом мы будем создавать новое свойство у RandomChar

    componentDidMount() {
        this.updateChar();
        // this.timerId = setInterval(this.updateChar, 3000);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharLoadded = (char) => {
        this.setState({ char, loading: false }) // тоже что и setState({char: char})
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    updateChar = () => {
        this.onCharLoading();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoadded) // приходящий аргумент автоматически вставится в функцию в виде параметра
            .catch(this.onError);
    }

    render() {
        const { char, loading, error } = this.state; // деструктуризация
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;


        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
}

const View = ({ char }) => {
    const _descMessage = 'Описания для этого персонажа ещё не добавлено';

    const { name, description, thumbnail, homepage, wiki } = char;

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