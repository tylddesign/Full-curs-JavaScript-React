import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage as FormikErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';

import './charSearchForm.scss';

const setContent = (process, result) => {
    switch (process) {
        case 'waiting':
            return null;
        case 'loading':
            return null;
        case 'search-error':
            return (
                <>
                    <div className="char__search-error">
                        The character was not found. Check the name and try again
                    </div>
                </>
            );
        case 'confirmed':
            return result;
        default:
            throw new Error('Unexpexted process state')
    }
}

const CharSearchForm = () => {
    const [char, setChar] = useState(null);
    const { getCharacterByName, clearError, process, setProcess } = useMarvelService();

    const updateChar = (charSearch) => {
        clearError();

        getCharacterByName(charSearch)
            .then(response => setChar(response))
            .then(() => setProcess('confirmed'))
    }

    const onSub = (value) => {
        updateChar(value.search);
    }

    const result = function () {
        if (!char) {
            if (process !== 'waiting') setProcess('waiting');
            return null;
        }
        if (char.length === 0) {
            if (process !== 'search-error') setProcess('search-error');
            return null;
        } else {
            if (process !== 'confirmed') setProcess('confirmed');
            return (
                <>
                    <div className="char__search-wrapper char__search-success">
                        There is! Visit {char[0].name} page?
                        <Link to={`/characters/${char[0].id}`}>
                            <button className="button button__secondary">
                                <div className="inner">TO PAGE</div>
                            </button>
                        </Link>
                    </div>
                </>
            )
        }
    }

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
                        <FormikErrorMessage component="div" name="search" className="char__search-error" />
                        {setContent(process, result())}
                    </Form>
                </div>
            </Formik >

        </>

    )
}

export default CharSearchForm;