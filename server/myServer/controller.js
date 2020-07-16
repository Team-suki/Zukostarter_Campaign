const db = require('./postgresDB.js');

module.exports = {
  //Story GET
  getStoryFromID: function(value, callback){
    var queryCMD = `SELECT * from story where id=${value + 1}`;
    db.query(queryCMD, (err, res) => {
      // console.log(res.rows[0]);
      if (err) {
        callback(err);
      } else {
        callback(null, res.rows[0]);
      }
    });
  },

  getRisksAndChallengesFromID: async function(value){
    try{
      var queryCMD = `SELECT * from risksandchallenges where id=${value + 1}`;
      return db.query(queryCMD, (err, res) => {
        // console.log(res.rows[0]);
        return res.rows[0];
    })
    } catch(error){
      return error
    }
  },

  getEnvironmentalCommitmentsFromID: async function(value){
    try{
      var queryCMD = `SELECT * from commitments where id=${value + 1}`;
      return db.query(queryCMD, (err, res) => {
        return res.rows[0];
    })
    } catch(error){
      return error
    }
  },
}