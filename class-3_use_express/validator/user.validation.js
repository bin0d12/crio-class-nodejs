const joi = require('joi');

console.log(joi);

const schema = joi.object().keys({
    age: joi.number().integer().min(0).max(100),
    gender: joi.string().valid('male', 'female')
}).or('age', 'gender')

const getQueryError = (data) =>{
    const result =  schema.validate(data)
    return result.error
}
module.exports = {getQueryError}