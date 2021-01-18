import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

const labels = ['Twitter', 'GitHub', 'YouTube', 'LinkedIn'];

test('footer spanshot, links', () => {
  const { container, getAllByRole, getByLabelText } = render(<Footer />);

  const links = getAllByRole('link');

  expect(links.length).toBe(4);

  for (let i = 0; i < 4; i++) {
    expect(getByLabelText(labels[i])).toBeTruthy();
  }

  expect(container.innerHTML).toMatchSnapshot();
});
