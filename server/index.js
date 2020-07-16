const express = require('express')
const morgan = require('morgan')

const path = require('path');
const cors = require('cors')

const db = require('./myServer/postgresDB.js');

const app = express()
const port = 3003

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));


app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});


// GET ID Specified Story
app.get('/api/story/:id', function (req, res){
  var id = req.params.id + 1 || 2;
  var queryCMD = `SELECT * from story where id=${id}`;
  db.query(queryCMD, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows[0]);
  });
});


// GET ID Specified Risk
app.get('/api/risksandchallenges/:id', function (req, res){
  var id = req.params.id + 1 || 2;
  var queryCMD = `SELECT * from risksandchallenges where id=${req.params.id + 1}`;
  db.query(queryCMD, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows[0]);
  });
});

// GET ID Specified Commit
app.get('/api/environmentalcommitments/:id', function (req, res){
  var id = req.params.id + 1 || 2;
  var queryCMD = `SELECT * from commitments where id=${req.params.id + 1}`;
  db.query(queryCMD, (err, result) => {
    if (err) throw err;
    res.status(200).send(result.rows[0]);
  });
});

app.listen(port, () =>{
  console.log(`listening at http://localhost:${port}`)
})