import React from 'react';
import Menu, { Props } from './Menu';
import Footer from './Footer';

interface PageProps extends Props {
  children: React.ReactNode;
}

export default function Page({
  children,
  mode,
  absolute,
}: PageProps): JSX.Element {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Menu mode={mode} absolute={absolute} />
      {children}
      <div className="flex-grow-1" />
      <Footer />
    </div>
  );
}
