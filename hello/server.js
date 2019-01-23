const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});


//Answers to Route Exercise
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


//Answers to Parameters Exercise
app.get('/students/:name', (req, res) => {
  let epiphany = ["sandi",
    "asheber",
    "sam",
    "richard",
    "kwadwo",
    "ashley",
    "erika",
    "aaron",
    "brian",
    "samuel",
    "oneil",
    "doug",
    "claudia",
    "aziza",
    "heather",
    "tessey",
    "jason",
    "jj",
    "charlie",
    "saida",
    "danny",
    "alex",
    "stanly",
    "mick",
    "jose",
    "christina"
  ]
  let name = epiphany.indexOf(req.params.name)

  if (name === -1) {
    res.send(`who is ${req.params.name}?`)
  } else {
    res.send(`${req.params.name} is in our class`)
  }
})


app.get('/year/:year', (req, res) => {
  if (Number(req.params.year) === NaN) {
    res.send(`${req.params.year} is not a year`)
  } else {
    let year = Number(req.params.year)
    let currentYear = 2019
    if (year > currentYear) {
      let diff = year - currentYear
      res.send(`${year} is in ${diff} years`)
    } else if (year === currentYear) {
      res.send(`${year} is this year!`)
    } else {
      let diff = currentYear - year
      res.send(`${year} is ${diff} years ago`)
    }
  }
})
