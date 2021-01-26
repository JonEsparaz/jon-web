import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import Menu from './Menu';

describe('navigation menu', () => {
  test('snapshots, light/dark mode, absolute/relative position', () => {
    const { container, rerender } = render(
      <MemoryRouter>
        <Menu mode="light" />
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <MemoryRouter>
        <Menu mode="light" absolute />
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <MemoryRouter>
        <Menu mode="dark" />
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <MemoryRouter>
        <Menu mode="dark" absolute />
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();
  });

  test('navbar toggler', async () => {
    Object.assign(window, { innerWidth: 300 });

    const { getByLabelText, container } = render(
      <MemoryRouter>
        <Menu mode="light" />
      </MemoryRouter>,
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

  test('navigate', async () => {
    const history = createBrowserHistory();
    const { getByText, getByAltText } = render(
      <Router history={history}>
        <Menu mode="light" />
      </Router>,
    );

    const logoLink = getByAltText('logo');
    const speedcubingLink = getByText('Speedcubing');
    const contactLink = getByText('Contact');

    fireEvent.click(contactLink);
    expect(history.location.pathname).toBe('/contact');

    fireEvent.click(speedcubingLink);
    expect(history.location.pathname).toBe('/speedcubing');

    fireEvent.click(logoLink);
    expect(history.location.pathname).toBe('/');
  });
});
