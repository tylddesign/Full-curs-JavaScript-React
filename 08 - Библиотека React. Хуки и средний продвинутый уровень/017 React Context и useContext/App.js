import { useState } from 'react';

import { dataContext } from './context';
import { Form } from './Form';

import './App.css';

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <dataContext.Provider value={data}>
            <Form text={data.text} />
            <button
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </dataContext.Provider>
    );
}

export default App;
