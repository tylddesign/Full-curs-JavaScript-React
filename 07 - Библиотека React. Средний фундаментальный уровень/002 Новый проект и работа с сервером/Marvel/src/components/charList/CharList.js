import { Component } from 'react';

import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/spinner';


import './charList.scss';

class CharList extends Component {
    state = {
        dataChars: [],
        loading: true,
        error: false
    }

    allCharacters = null;

    marvelService = new MarvelService();

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onCharLoadded = (chars) => {
        this.setState({ dataChars: chars, loading: false }) // тоже что и setState({char: char})
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    componentDidMount() {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharLoadded)
            .catch(this.onError);
    }

    render() {
        const errorMessage = this.state.error === true ? <ErrorMessage /> : null;
        const spinner = this.state.loading === true ? <Spinner /> : null;
        const content = !(errorMessage || spinner) ? <View dataChars={this.state.dataChars} onCharSelected={this.props.onCharSelected} /> : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                <ul className="char__grid">
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

const View = ({ dataChars, onCharSelected }) => {
    const characters = dataChars.map(item => {
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