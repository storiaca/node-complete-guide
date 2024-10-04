const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('This is first middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('This is second middleware');
//   res.send('<h2>This is assignment 2</h2>')
// });

app.use('/users',(req, res, next) => {
  res.send('<h2>This is users route</h2>')
});

app.use('/',(req, res, next) => {
  res.send('<h2>This is Home route</h2>')
});

app.listen(5555);

