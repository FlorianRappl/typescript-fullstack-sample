import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App, GlobalStateProvider } from '../common';

export function createView() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStateProvider>
  );
}
