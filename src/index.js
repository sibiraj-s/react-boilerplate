import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import '../src/tailwind.scss';
import './styles/index.scss';

import App from './App';

ReactDOM.render(<App />, document.getElementById('__root'));
