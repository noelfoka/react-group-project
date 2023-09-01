import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should have active link for Rockets', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    );

    const rocketsLink = getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();
  });
});
