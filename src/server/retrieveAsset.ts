import * as express from 'express';
import { resolve } from 'path';

const clientDir = resolve(__dirname, '..', 'client');

export const retrieveAsset = express.static(clientDir, {
  fallthrough: true,
});
