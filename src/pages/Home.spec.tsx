import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import Home from './Home';

describe('home page', () => {
  test('snapshot, resize handler', () => {
    const { container, queryByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    Object.assign(window, { innerWidth: 1920, innerHeight: 1080 });
    fireEvent(window, new Event('resize'));

    expect(queryByTestId('about-me-btn')).toBeTruthy();

    Object.assign(window, { innerWidth: 1080, innerHeight: 1920 });
    fireEvent(window, new Event('resize'));

    expect(queryByTestId('about-me-btn')).toBeFalsy();
  });

  test('click buttons', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    const history = createBrowserHistory();
    const { getByTestId, getByText } = render(
      <Router history={history}>
        <Home />
      </Router>,
    );

    Object.assign(window, { innerWidth: 1920, innerHeight: 1080 });
    fireEvent(window, new Event('resize'));

    fireEvent.click(getByTestId('about-me-btn'));

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    fireEvent.click(getByText('Contact Me'));
    expect(history.location.pathname).toBe('/contact');

    fireEvent.click(getByText(`solving Rubik's Cubes`));
    expect(history.location.pathname).toBe('/speedcubing');
  });
});
