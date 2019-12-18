import * as React from 'react';
import { StaticRouter } from 'react-router';
import { App, GlobalStateProvider } from '../common';

export function createView(path: string) {
  return (
    <GlobalStateProvider>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </GlobalStateProvider>
  );
}
