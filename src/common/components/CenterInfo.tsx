import * as React from 'react';

export interface CenterInfoProps {
  info: React.ReactNode;
}

export const CenterInfo: React.FC<CenterInfoProps> = ({ info }) => (
  <p style={{ textAlign: 'center' }}>
    <b>{info}</b>
  </p>
);
