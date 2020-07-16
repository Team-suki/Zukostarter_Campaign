const db = require('./postgresDB.js');

module.exports = {
  //Story GET
  getStoryFromID: function(value){

    // const connect = await db.Connection();

    var queryCMD = `SELECT * from commitments where id=${value + 1}`;
    return db.query(queryCMD, (err, res) => {
      // console.log(res.rows[0]);
      return res.rows[0];
    })
  }


}