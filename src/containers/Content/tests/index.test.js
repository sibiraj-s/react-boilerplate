import React from 'react';
import { render } from '@testing-library/react';

import Content from '../index';

describe('<Content />', () => {
  it('should render and match the snapshot', () => {
    const { asFragment } = render(<Content />);
    const renderedOutput = asFragment();
    expect(renderedOutput).toMatchSnapshot();
  });
});
