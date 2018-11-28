const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (request, response) => {
  response.send("Hello there!");
});

app.get('/name', (req, res) => {
  res.send('drakey');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
