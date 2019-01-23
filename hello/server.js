const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});


//Answers to first Exercise
app.get('/', (req, res) => {
  res.send("Welcome to my webpage!");
})

app.get('/favorite-food', (req, res) => {
  res.send("mint chocolate chip ice cream");
})

app.get('/favorite-movie', (req, res) => {
  res.send("When Harry Met Sally");
})

app.get('/about-me', (req, res) => {
  res.send("I am a WDI Instructor who loves coding and solving bugs!");
})

app.get('/contact', (req, res) => {
  res.send("email: me@me.com");
})
