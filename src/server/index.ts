import * as express from 'express';
import { renderIndex } from './renderIndex';
import { retrieveAsset } from './retrieveAsset';

const app = express();
const port = process.env.PORT || 3000;

// happy path
app.get('/', renderIndex);

// define more routes here (e.g., for POSTing data)

// resolve any static content, such as /app.js
app.get('*', retrieveAsset);

// SPA fallback
app.get('*', renderIndex);

app.listen(port, () => {
  console.log(`Server running at [ http://localhost:${port} ] ...`);
});
