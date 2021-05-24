const validateString = (str) => {
    return str !== '' || 'Please enter a valid response!';
}

const validateNumber = (num) => {
    return (isNaN(num) === false) || 'Please enter a number!';
}


module.exports = { validateString, validateNumber }