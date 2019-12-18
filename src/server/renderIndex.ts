import { RequestHandler } from 'express';
import { renderToString } from 'react-dom/server';
import { createView } from './createView';

export const renderIndex: RequestHandler = (req, res) => {
  const view = createView(req.path);
  const content = renderToString(view);
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Sample Document</title>
</head>
<body>
<div id="app">${content}</div>
<script src="app.js"></script>
</body>
</html>
`);
};
