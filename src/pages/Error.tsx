import React from 'react';
import { ButtonLink } from '../components/Button';
import Page from '../components/Page';

export default function Error(): JSX.Element {
  return (
    <Page mode="dark">
      <div className="container">
        <div className="row" style={{ textAlign: 'center' }}>
          <div>
            <h2>
              Page not found{' '}
              <span role="img" aria-label="confused emoji">
                😕
              </span>
            </h2>
            <ButtonLink to="/" dark>
              Back to home
            </ButtonLink>
          </div>
        </div>
      </div>
    </Page>
  );
}
