const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var knex = require('knex')
var bcrypt = require('bcrypt-nodejs');

const register = require('./controllers/register');
const signin = require('./controllers/signin');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '521991889',
    database : 'Mental Health'
  }
});


app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

/********* in front end, there is no prompt for duplicate email but no registration/insertion happens in database **********/
/********* in front end, there is no conditioning yet for this issue **********/
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => {
 const { id } = req.params;
 let found = false;
 db.select('*').from('users').where({ id })
 .then(user => {
  if(user.length)
    res.json(user[0]);
  else
    res.status(404).json('Not found');
 })
 // if(!found){
 //  res.status(404).json('not found');
 // }
})

app.put('/post', (req, res) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('posts', 1)
  .returning('posts')
  .then(posts => {
    res.json(posts[0]);
  })
  .catch(err => res.status(404).json('not found user'));
})

// process.env.PORT
app.listen(3000, () => 
  console.log('Example app listening on port 3000',)
  )