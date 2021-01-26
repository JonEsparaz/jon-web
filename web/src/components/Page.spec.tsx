import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page from './Page';

describe('Page wrapper component', () => {
  test('snapshots, light/dark mode, absolute/relative position', () => {
    const { container, rerender } = render(
      <MemoryRouter>
        <Page mode="light">
          <div>child</div>
        </Page>
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <MemoryRouter>
        <Page mode="light" absolute>
          <div>child</div>
        </Page>
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <MemoryRouter>
        <Page mode="dark">
          <div>child</div>
        </Page>
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();

    rerender(
      <MemoryRouter>
        <Page mode="dark" absolute>
          <div>child</div>
        </Page>
      </MemoryRouter>,
    );

    expect(container.innerHTML).toMatchSnapshot();
  });
});
