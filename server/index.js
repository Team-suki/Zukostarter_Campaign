const express = require('express')
const morgan = require('morgan')

const controller = require('./myServer/controller.js');

const path = require('path');
const cors = require('cors')

const db = require('./myServer/postgresDB.js');

const app = express()
const port = 3003

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use(express.static(__dirname + '/../client/dist'));

// ======= STORY ========

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// GET One Story
app.get('/api/story/:id', function (req, res){
  var queryCMD = `SELECT * from story where id=${req.params.id + 1}`;
  db.query(queryCMD, (err, result) => {
    // console.log(res.rows[0]);
    if (err) throw err;
    res.status(200).send(result.rows[0]);
  });
});

app.listen(port, () =>{
  console.log(`listening at http://localhost:${port}`)
})