import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';

test('projects', () => {
  const { container } = render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  );

  expect(container.innerHTML).toMatchSnapshot();
});
