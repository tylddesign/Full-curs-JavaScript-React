import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import styled from 'styled-components';

import { Button } from '../src/components/app/app.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`

root.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">+++</BigButton>
  </React.StrictMode>
);

