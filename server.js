const express = require('express');
const PORT = process.env.PORT || 5678;

const app = express();

app.get('/', (request, response) => {
  response.send("Hello there!");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});