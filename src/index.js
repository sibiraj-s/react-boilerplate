import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';

import App from './App';

const Root = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

const container = document.getElementById('__root');
const root = createRoot(container);

root.render(<Root />);
