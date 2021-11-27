import React from 'react';
import { render, getByTestId, getAllByTestId } from '@testing-library/react';
import Spinner from '.';

describe('Spinner', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<Spinner />).container;
  });

  it('renders the spinner to the DOM', () => {
    const spinner = getByTestId(container, 'spinner');

    expect(spinner).toBeInTheDocument();
  });

  it('renders its children to the DOM', () => {
    const children = getAllByTestId(container, 'bounce');

    expect(children).toHaveLength(3);
  });
});
