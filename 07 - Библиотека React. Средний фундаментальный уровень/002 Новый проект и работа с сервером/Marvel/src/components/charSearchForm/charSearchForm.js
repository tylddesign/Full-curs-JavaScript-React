import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charSearchForm.scss';

const CharSearchForm = () => {

    const [char, setChar] = useState(null);

    const { loading, error, getCharacterByName, clearError } = useMarvelService();

    const updateChar = (charSearch) => {
        clearError();

        getCharacterByName(charSearch)
            .then(response => setChar(response));
    }

    const onSub = (value) => {
        updateChar(value.search);
    }

    const spinner = loading === true ? <Spinner /> : null;
    const errorMessage = error === true ? <ErrorMessage /> : null;
    const result = char ? char.length > 0 ? (
        <div className="char__search-wrapper char__search-success">
            There is! Visit {char[0].name} page?
            <Link to={`/characters/${char[0].id}`}>
                <button className="button button__secondary">
                    <div className="inner">TO PAGE</div>
                </button>
            </Link>
        </div>
    ) : (
        <div className="char__search-error">
            The character was not found. Check the name and try again
        </div>
    ) : null;

    return (
        <>
            <Formik
                initialValues={{ search: '' }}
                validationSchema={
                    Yup.object({
                        search: Yup.string()
                            .required('This field is required')
                    })
                }
                onSubmit={value => onSub(value)}
            >
                <div className="char__search-form">
                    <Form >
                        <label className="char__search-label" htmlFor="search">Or find a character by name:</label>
                        <div className="char__search-wrapper">
                            <Field
                                id="search"
                                name="search"
                                type="text"
                                placeholder="Enter name"
                            />
                            <button className="button button__main" type="submit">
                                <div className="inner">Find</div>
                            </button>
                        </div>
                        <FormikErrorMessage className="char__search-error" name="search" component="div" />
                        {errorMessage}
                        {result}
                        {spinner}
                    </Form>
                </div>
            </Formik >

        </>

    )
}

export default CharSearchForm;