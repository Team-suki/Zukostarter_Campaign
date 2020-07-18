

const express = require('express')
const morgan = require('morgan')

// const controller = require('./controller/controller.js');
const controller = require('./myServer/controller.js');

const path = require('path');
const cors = require('cors')

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

// GET All Story
app.get('/api/story', function (req, res){
  controller.getStoryFromID(true)
  .then(data => {

    res.status(200).send(data);
  })
  .catch(err => {
    res.status(500);
  })
});

// GET One Story
app.get('/api/story/:id', function (req, res){
  controller.getStoryFromID(req.params.id, (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  })
  // .then(data => {
  //   console.log(data);
  //   res.status(200).send(data);
  // })
  // .catch(err => {
  //   res.status(500);
  // })
});

// POST
app.post('/api/story', function (req, res){
  controller.postStory(req.body)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// UPDATE
app.patch('/api/story/:id', function (req, res){
  controller.updateStory(req.body, req.params.id)
    .then(result => {
      res.status(201).send(`Updated ID: ${req.params.id}`);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// DELETE
app.delete('/api/story/:id', function (req, res){
  controller.deleteStory(req.params.id)
    .then(result => {
      res.status(200).send(`Deleted ID: ${req.params.id}`);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// ======= RISKS & CHALLENGES ========

// GET All Risksandchallenges
app.get('/api/risksandchallenges', function (req, res){
  controller.getRisksAndChallengesFromID(true)
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(500);
  })
});

// GET One Risksandchallenges
app.get('/api/risksandchallenges/:id', function (req, res){
  controller.getRisksAndChallengesFromID(req.params.id)
  .then(data => {
    res.status(200).send(data);
  })
});

// POST
app.post('/api/risksandchallenges', function (req, res){
  controller.postRisksAndChallenges(req.body)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// UPDATE
app.patch('/api/risksandchallenges/:id', function (req, res){
  controller.updateRisksAndChallenges(req.body, req.params.id)
    .then(result => {
      res.status(201).send(`Updated ID: ${req.params.id}`);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// DELETE
app.delete('/api/risksandchallenges/:id', function (req, res){
  controller.deleteRisksAndChallenges(req.params.id)
    .then(result => {
      res.status(200).send(`Deleted ID: ${req.params.id}`);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})



// ======= ENVIRONMENTAL COMMITMENTS ========
app.get('/api/environmentalcommitments/:id', function (req, res){
  controller.getEnvironmentalCommitmentsFromID(req.params.id)
  .then(function(data){
    res.status(200).send(data);
  })
});

app.listen(port, () =>{
  console.log(`listening at http://localhost:${port}`)
})

// GET All Environmentalcommitments
app.get('/api/environmentalcommitments', function (req, res){
  controller.getEnvironmentalCommitmentsFromID(true)
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(500);
  })
});

// GET One Environmentalcommitments
app.get('/api/environmentalcommitments/:id', function (req, res){
  controller.getEnvironmentalCommitmentsFromID(req.params.id)
  .then(data => {
    res.status(200).send(data);
  })
});

// POST
app.post('/api/environmentalcommitments', function (req, res){
  controller.postEnvironmentalCommitments(req.body)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// UPDATE
app.patch('/api/environmentalcommitments/:id', function (req, res){
  controller.updateEnvironmentalCommitments(req.body, req.params.id)
    .then(result => {
      res.status(201).send(`Updated ID: ${req.params.id}`);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})

// DELETE
app.delete('/api/environmentalcommitments/:id', function (req, res){
  controller.deleteEnvironmentalCommitments(req.params.id)
    .then(result => {
      res.status(200).send(`Deleted ID: ${req.params.id}`);
    })
    .catch(err => {
      res.status(500).send('error');
    })
})