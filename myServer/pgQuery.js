// const { Pool, Client } = require('pg');
// const dbCreds = require('../postgres.json');

// // const pool = new Pool({ connectionString })

// // pool.query('SELECT NOW()', (err, res) => {
// //   console.log(res);
// //   pool.end();
// // })

// const connectionString = `postgressql://${dbCreds.username}:${dbCreds.pwd}@localhost:${dbCreds.port}/sdc`;


// const client = new Client({ connectionString })

// client.connect();

// client.query('SELECT * from commitments', (err, res) => {
//     console.log(res.rows);
//     client.end();
// })
