import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

const labels = ['Twitter', 'GitHub', 'YouTube', 'LinkedIn'];

test('footer spanshot, links', () => {
  const { container, getAllByRole, getByLabelText } = render(<Footer />);

  const links = getAllByRole('link');

  // four links
  expect(links.length).toBe(4);

  // each link matches label
  for (let i = 0; i < 4; i++) {
    expect(getByLabelText(labels[i])).toBeTruthy();
  }

  expect(container.innerHTML).toMatchSnapshot();
});
