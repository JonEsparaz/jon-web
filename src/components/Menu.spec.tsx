import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Menu from './Menu';

describe('navigation menu', () => {
  test('snapshots, light/dark mode, absolute/relative position', () => {
    const history = createMemoryHistory();
    const { container, rerender } = render(
      <Router history={history}>
        <Menu mode="light" />
      </Router>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <Router history={history}>
        <Menu mode="light" absolute />
      </Router>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <Router history={history}>
        <Menu mode="dark" />
      </Router>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <Router history={history}>
        <Menu mode="dark" absolute />
      </Router>,
    );

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('navbar toggler', async () => {
    Object.assign(window, { innerWidth: 300 });

    const history = createMemoryHistory();
    const { getByLabelText, container } = render(
      <Router history={history}>
        <Menu mode="light" />
      </Router>,
    );

    // toggler button
    const toggler = getByLabelText('Toggle navigation');

    // navbar is collapsed
    expect(container.getElementsByClassName('show').length).toBe(0);

    // hamburger component is closed
    expect(toggler.innerHTML).toMatchSnapshot();

    // click button
    fireEvent.click(toggler);

    // navbar is open
    await waitFor(() =>
      expect(container.getElementsByClassName('show').length).toBe(1),
    );

    // hamburger component is open
    expect(toggler.innerHTML).toMatchSnapshot();
  });
});
