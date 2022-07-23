const express = require('express');
let axios = require('axios');
var app = express();
let expressError = require('./expressError')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res, next) {
  return res.send('hello')
})

app.post('/', async function(req, res, next) {
  try {
    if (!req.body.developers) {
      throw new expressError("Request body must include 'developers'", 400)
    }
    if (req.body.developers.length == 0) {
      throw new expressError("The key 'developers' must be an array of github usernames", 400)
    }
    let developers = req.body.developers
    const results = []
    for (let d of developers) {
      const result = await axios.get(`https://api.github.com/users/${d}`);
      results.push(result);
    }
    
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(out);
  } catch(err) {
    next(err);
  }
});

// 404 handler
app.use(function (req, res, next){
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)});

// generic error handler
app.use(function(err, req, res, next){
  // the default status is 500 Internal Server Error
  let status = err.status||500;
  let message = err.message;
  // set the status and alert the user
  return res.status(status).json({error: {
    message, status}});});

app.listen(3000, function(req, res) {
  console.log('App on port 3000')
});
