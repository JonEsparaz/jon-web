import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?(): void;
  dark?: boolean;
}

export default function Button({
  children,
  onClick,
  dark,
  type,
  disabled,
}: ButtonProps): JSX.Element {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={`action-btn ${dark ? 'dark-btn' : 'light-btn'}`}
      onClick={onClick}
    >
      <span className={`${dark ? 'underline-light' : 'underline-dark'}`}>
        {children}
      </span>
    </button>
  );
}

interface ButtonLinkProps {
  children: string;
  to: string;
  dark?: boolean;
}

export function ButtonLink({
  children,
  to,
  dark,
}: ButtonLinkProps): JSX.Element {
  return (
    <Link
      to={to}
      className={`action-btn link-btn ${dark ? 'dark-btn' : 'light-btn'}`}
    >
      <span className={`${dark ? 'underline-light' : 'underline-dark'}`}>
        {children}
      </span>
    </Link>
  );
}
