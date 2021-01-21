import React from 'react';
import Page from '../components/Page';

export default function Projects(): JSX.Element {
  return (
    <Page mode="dark">
      <div className="container">
        <div className="row" style={{ textAlign: 'center' }}>
          <div>
            <h2>
              Projects{' '}
              <span role="img" aria-label="hammer and wrench emoji">
                🛠️
              </span>
            </h2>
            <div>(coming soon)</div>
          </div>
        </div>
      </div>
    </Page>
  );
}
