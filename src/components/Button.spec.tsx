import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Button, { ButtonLink } from './Button';

const mockClick = jest.fn();

beforeAll(() => {
  mockClick.mockReset();
});

describe('Button, ButtonLink components', () => {
  test('spanshot, click, Button dark', () => {
    const { container, getByText } = render(
      <Button onClick={mockClick} dark>
        button
      </Button>,
    );

    fireEvent.click(getByText('button'));

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('spanshot, click, Button light', () => {
    const { container, getByText } = render(
      <Button onClick={mockClick}>button</Button>,
    );

    fireEvent.click(getByText('button'));

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('spanshot, navigate, ButtonLink dark', () => {
    const history = createBrowserHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <ButtonLink to="/test" dark>
          link
        </ButtonLink>
      </Router>,
    );

    fireEvent.click(getByText('link'));

    expect(history.location.pathname).toBe('/test');
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('spanshot, navigate, ButtonLink light', () => {
    const history = createBrowserHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <ButtonLink to="/testing">link</ButtonLink>
      </Router>,
    );

    fireEvent.click(getByText('link'));

    expect(history.location.pathname).toBe('/testing');
    expect(container.innerHTML).toMatchSnapshot();
  });
});
