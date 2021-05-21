const inquirer = require("inquirer")
const { promptHandler } = require("./index")


const confirmPrompt = () => {
    return inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message: 'Another Request or Exit?'
    })
    .then((answer) => {
        console.log(answer.confirm);
        if (answer.confirm) 
        promptHandler();
        else console.log('Programme finished')
    }) 
}

module.exports = { confirmPrompt }