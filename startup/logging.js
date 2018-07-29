
require('express-async-errors');
const winston = require('winston');
//require('winston-mongodb');

module.exports = function(){
winston.add(winston.transports.File, { filename : 'logfile.log' });
// winston.add(winston.transports.MongoDB, {
//   db : 'mongodb://localhost:27017/vidly',
//   level : 'info'
// });

winston.handleExceptions(winston.transports.File, { filename : 'uncaughtExceptions.log' });

process.on('unhandledRejection', (ex) => {
    throw ex;
})};