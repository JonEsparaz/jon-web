import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Menu from './Menu';

describe('navigation menu', () => {
  test('snapshots, light/dark mode, absolute/relative position', () => {
    const history = createMemoryHistory();
    const { rerender } = render(
      <Router history={history}>
        <Menu mode="light" />
      </Router>,
    );

    expect(screen).toMatchSnapshot();

    rerender(
      <Router history={history}>
        <Menu mode="light" absolute />
      </Router>,
    );

    expect(screen).toMatchSnapshot();

    rerender(
      <Router history={history}>
        <Menu mode="dark" />
      </Router>,
    );

    expect(screen).toMatchSnapshot();

    rerender(
      <Router history={history}>
        <Menu mode="dark" absolute />
      </Router>,
    );

    expect(screen).toMatchSnapshot();
  });
});
