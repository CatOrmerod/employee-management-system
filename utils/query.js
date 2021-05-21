const connection = require('./connection')
//const { confirmPrompt } = require('./confirmPrompt')
const { promptHandler } = require('./index')

const queryHandler = (query, params) => {
    //console.log(promptHandler)
    connection.query(query, params, (err, res) => {
        console.table(res);
        if (err) throw err;
        promptHandler();
    });
};

module.exports = { queryHandler };