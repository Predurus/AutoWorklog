let Worklog = require('../Models/Worklog');

/**
 * Init Sequelize Models
 * @param {*} cb Callback 
 */
function SyncModels(cb){
    Worklog.sync().then((result)=>{
        return cb(result,'');
    }).catch((error)=>{
        return cb('',new Error(`Error creating Model ${error}`));
    })
}


module.exports = {
    SyncModels:SyncModels
};