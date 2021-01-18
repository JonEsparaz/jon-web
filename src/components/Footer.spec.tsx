import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

const labels = ['Twitter', 'GitHub', 'YouTube', 'LinkedIn'];

test('footer spanshot, links', () => {
  render(<Footer />);

  const links = screen.getAllByRole('link');

  expect(links.length).toBe(4);

  for (let i = 0; i < 4; i++) {
    expect(screen.getByLabelText(labels[i])).toBeTruthy();
  }

  expect(screen).toMatchSnapshot();
});
