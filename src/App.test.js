import { describe, it, expect } from '@jest/globals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(App).toBeInstanceOf(Function);
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
