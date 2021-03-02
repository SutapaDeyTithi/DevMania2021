const express = require('express')
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors')
var knex = require('knex')
var bcrypt = require('bcrypt-nodejs');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const sendFileList = require('./controllers/sendFilelist');
const addAdmin = require('./controllers/addAdmin');

//file upload
const multer = require('multer');
const uuid = require('uuid').v4; //adds a hash with the filename; didn't use it 
const path =  require('path');
const fs = require('fs');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '521991889',
    database : 'studydesk'
  }
});

//console.log(db.select('*').from('users'));

//file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      const { originalname } = file;
      const filePath = `uploads/${originalname}`;
      console.log(filePath);
      cb(null, originalname);
  }
})

const upload = multer({ storage }); 


app.use(cors());
app.use(bodyParser.json());

//file upload
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

/********* in front end, there is no prompt for duplicate email but no registration/insertion happens in database **********/
/********* in front end, there is no conditioning yet for this issue **********/
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

app.post('/showfiles', (req, res) => { filestore.handleFiledb(req, res, db, bcrypt) })

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

app.get('/file', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.post('/upload', upload.array('avatar'), (req, res) => {
  return res.json({ status: 'OK', uploaded: req.files.length });
});




app.get('/getFileList', (req, res) => { sendFileList.sendFileList(req, res) })

//addAdmin.addAdmin(db, bcrypt);

// process.env.PORT
app.listen(3000, () => 
  console.log('Example app is listening on port 3000',)
)