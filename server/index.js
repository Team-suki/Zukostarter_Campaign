var nr = require('newrelic');

const express = require('express')
const morgan = require('morgan')

const path = require('path');
const cors = require('cors')

const db = require('./myServer/db/postgresDB.js');

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
app.get('/api/story/:id', async function(req, res){
  try {
    const result = await db.query(`SELECT * FROM story WHERE id =${req.params.id}`);
    res.send(result.rows[0]);
  } catch(err) {
    res.send(err);
  }


  // db.query(`SELECT * FROM story WHERE id =${req.params.id}`)
  //   .then(result => {
  //     res.send(result.rows[0]);
  //   })
  //   .catch(err => {
  //     res.send(err);
  //   })
});


// GET ID Specified Risk
app.get('/api/risksandchallenges/:id', async function (req, res){
  try {
    const result = await db.query(`SELECT * FROM risksandchallenges WHERE id =${req.params.id}`);
    res.send(result.rows[0]);
  } catch(err) {
    res.send(err);
  }

  // db.query(`SELECT * from risksandchallenges where id=${req.params.id}`, (err, result) => {
  //   if (err) throw err;
  //   res.status(200).send(result.rows[0]);
  // });
});

// GET ID Specified Commit
app.get('/api/environmentalcommitments/:id', async function (req, res){
  try {
    const result = await db.query(`SELECT * FROM commitments WHERE id =${req.params.id}`);
    res.send(result.rows[0]);
  } catch(err) {
    res.send(err);
  }

  // db.query(`SELECT * from commitments where id=${req.params.id}`, (err, result) => {
  //   if (err) throw err;
  //   res.status(200).send(result.rows[0]);
  // });
});

app.listen(port, () =>{
  console.log(`listening at http://localhost:${port}`)
})