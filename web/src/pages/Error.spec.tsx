import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Error from './Error';

test('404 error page', () => {
  const history = createBrowserHistory();
  history.push('404');
  const { container, getByText } = render(
    <Router history={history}>
      <Error />
    </Router>,
  );

  expect(container.innerHTML).toMatchSnapshot();

  expect(history.location.pathname).toBe('/404');
  fireEvent.click(getByText('Back to home'));
  expect(history.location.pathname).toBe('/');
});
