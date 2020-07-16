const { Client } = require('pg');

const dbCreds = require('../../postgres.json');
const connectionString = `postgressql://${dbCreds.username}:${dbCreds.pwd}@localhost:${dbCreds.port}/sdc`;

const postgre = new Client({ connectionString });

postgre.connect();

// postgre.query('SELECT * from commitments where id=2', (err, res) => {
//   console.log(res.rows[0]);
//   postgre.end();
// })

module.exports = postgre;