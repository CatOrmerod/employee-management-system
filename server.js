const logo = require('asciiart-logo')
const { promptHandler } = require('./utils/index')
const connection = require('./utils/connection')

connection.connect((err) => {
    if (err) throw err;
    afterConnection();
});

afterConnection = () => {
    console.log(
        logo({
            name: 'EMPLOYEE TRACKER',
            font: 'Speed',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'bold-green',
            textColor: 'green',
        })
            .emptyLine()
            .right('Cat Ormerod')
            .emptyLine()
            .render()
    )
    promptHandler();
}
