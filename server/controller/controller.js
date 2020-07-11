const db = require('../model/database.js')

module.exports = {
  //Story GET
  getStoryFromID: async function(value){
    try{
      const connect = await db.Connection();
      if (typeof value === 'string') {
        return connect.models.Story.findOne({ where: { id: value }})
          .then( function(data){
            return data.dataValues
          })
          .catch( function(err){
            return err
          })
      } else {
        return connect.models.Story.findAll()
          .then( function(data){
            return data
          })
          .catch( function(err){
            return err
          })
      }
    } catch(error){
      return error
    }
  },

  //Story POST
  postStory: async function(value){
    try{
      const connect = await db.Connection();
      return connect.models.Story.create(value)
        .then( function(data){

        })
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  updateStory: async function(data, id){
    try{
      const connect = await db.Connection();
      return connect.models.Story.update(data, {where: { id }})
        .then()
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  deleteStory: async function(id){
    try{
      const connect = await db.Connection();
      return connect.models.Story.destroy({where: { id }})
        .then()
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  // RISKS AND CHALLENGES
  getRisksAndChallengesFromID: async function(value){
    try{
      const connect = await db.Connection();
      if (typeof value === 'string') {
        return connect.models.RisksAndChallenges.findOne({ where: { id: value }})
          .then( function(data){
            return data.dataValues
          })
          .catch( function(err){
            return err
          })
      } else {
        return connect.models.RisksAndChallenges.findAll()
          .then( function(data){
            return data
          })
          .catch( function(err){
            return err
          })
      }
    } catch(error){
      return error
    }
  },

  //RisksAndChallenges POST
  postRisksAndChallenges: async function(value){
    try{
      const connect = await db.Connection();
      return connect.models.RisksAndChallenges.create(value)
        .then( function(data){

        })
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  updateRisksAndChallenges: async function(data, id){
    try{
      const connect = await db.Connection();
      return connect.models.RisksAndChallenges.update(data, {where: { id }})
        .then()
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  deleteRisksAndChallenges: async function(id){
    try{
      const connect = await db.Connection();
      return connect.models.RisksAndChallenges.destroy({where: { id }})
        .then()
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  // Environmental Commitments
  getEnvironmentalCommitmentsFromID: async function(value){
    try{
      const connect = await db.Connection();
      if (typeof value === 'string') {
        return connect.models.EnvironmentalCommitments.findOne({ where: { id: value }})
          .then( function(data){
            return data.dataValues
          })
          .catch( function(err){
            return err
          })
      } else {
        return connect.models.EnvironmentalCommitments.findAll()
          .then( function(data){
            return data
          })
          .catch( function(err){
            return err
          })
      }
    } catch(error){
      return error
    }
  },

  //EnvironmentalCommitments POST
  postEnvironmentalCommitments: async function(value){
    try{
      const connect = await db.Connection();
      return connect.models.EnvironmentalCommitments.create(value)
        .then( function(data){

        })
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  updateEnvironmentalCommitments: async function(data, id){
    try{
      const connect = await db.Connection();
      return connect.models.EnvironmentalCommitments.update(data, {where: { id }})
        .then()
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },

  deleteEnvironmentalCommitments: async function(id){
    try{
      const connect = await db.Connection();
      return connect.models.EnvironmentalCommitments.destroy({where: { id }})
        .then()
        .catch( function(err){
          return err
        })
    } catch(error){
      return error
    }
  },
}



// module.exports.getStoryFromID = getStoryFromID;
// module.exports.getRisksAndChallengesFromID = getRisksAndChallengesFromID;
// module.exports.getEnvironmentalCommitmentsFromID = getEnvironmentalCommitmentsFromID;