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
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Menu mode={mode} absolute={absolute} />
      {children}
      <div style={{ flexGrow: 1 }} />
      <Footer />
    </div>
  );
}
