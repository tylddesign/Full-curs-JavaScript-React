import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import styled from 'styled-components';

import BootstrapTest from './BootstrapTest';

import { Button } from '../src/components/app/app.js'

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`

root.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">+++</BigButton>
    <BootstrapTest />
  </React.StrictMode>
);

