import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/spinner';


import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1550,
        charEnded: false
    }

    allCharacters = null;

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharListLoadded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        this.setState(({ offset, charList }) => ({ // круглые скобки вокруг фигурных означают, что мы возвращаем объект из функции
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoadded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    render() {
        const { error, loading, charList, newItemLoading, offset, charEnded } = this.state;

        const errorMessage = error === true ? <ErrorMessage /> : null;
        const spinner = loading === true ? <Spinner /> : null;
        const content = !(errorMessage || spinner) ? <View charList={charList} onCharSelected={this.props.onCharSelected} /> : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                <ul className="char__grid">
                    {content}
                </ul>
                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    onClick={() => this.onRequest(offset)}
                    style={{ 'display': charEnded ? 'none' : 'block' }}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

const View = ({ charList, onCharSelected }) => {

    const characters = charList.map(item => {
        return (
            <li className="char__item"
                key={item.id}
                onClick={() => onCharSelected(item.id)}
            >
                <img src={item.thumbnail} alt={item.description}
                    style={{ objectFit: `${item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? "fill" : "cover"}` }}
                />
                <div className="char__name">{item.name}</div>
            </li>
        )
    })
    return characters;
}

export default CharList;