const connection = require('./connection')

// const queryHandler = (query, params, cb) => {
//     //console.log(promptHandler)
//     connection.query(query, params, (err, res) => {
//         console.table(res);
//         cb()
//         if (err) throw err;
//     });
// };

const queryHandler = (query, params) => new Promise (
    (resolve, reject) => {
        connection.query(query, params, (err, res) => {
            if (err) reject(err);
            resolve(res);
        }); 
    }
);

const endPrompts = () => connection.end();

module.exports = { queryHandler, endPrompts };