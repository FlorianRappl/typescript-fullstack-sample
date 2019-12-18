import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

export const NotFoundPage: React.FC<RouteComponentProps> = () => (
  <>
    <h1>Not Found</h1>
    <p>The given page has not been found. Sure you did not mistype?</p>
    <p><Link to="/">Back to homepage</Link></p>
  </>
);
