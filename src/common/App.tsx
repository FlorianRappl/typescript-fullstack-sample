import * as React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { TickerPage } from './pages/TickerPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TodoPage } from './pages/TodoPage';

export interface AppProps {}

export const App: React.FC<AppProps> = () => (
  <div>
    <p>Example application</p>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/ticker">Ticker</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/ticker" exact component={TickerPage} />
      <Route path="/todo" exact component={TodoPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);
