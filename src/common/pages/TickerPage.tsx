import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { CenterInfo } from '../components';

export const TickerPage: React.FC<RouteComponentProps> = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const tid = setTimeout(() => setValue(value + 1), 1000);
    return () => clearTimeout(tid);
  }, [value]);

  return (
    <>
      <h1>Ticker</h1>
      <p>The following ticker will increment every second:</p>
      <CenterInfo info={value} />
      <p>Note: We use a local state, so page changes won't preserve the value.</p>
    </>
  );
};
