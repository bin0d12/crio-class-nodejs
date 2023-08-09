const usersData = require('../../users-data.json');
const joi = require('joi')
const {getQueryError} = require("../validator/user.validation")
getAllUsers = (req, res) => {
    res.send(usersData)
}
getByUuid = (req, res) => {
    const {uuid} = req.params;
    const userUuid = usersData.data.find(u => u.login.uuid === uuid)
    if(userUuid){
            res.json(userUuid)
    } else {
        res.send(404)
    }
}
searchByGenderAge = (req, res) =>{
    const {gender, age} = req.query;
    const error = getQueryError({age, gender});
    console.log(error);
    if(error)
    return res.status(404).json(error)
    // if(!gender && !age){ 
    //     res.send({
    //         message:"give proper age/ gender"
    //     })
    // }
    // if(age){
    //     if(Number(age)){
    //         return res.status(422).json({
    //             message: "age should be a number"
    //         })
    //     }
    // }
    if(gender && age){
        res.json(
            usersData.data.filter((u) => 
                u.gender === gender.toLowerCase() && u.dob.age === Number(age)
            )
        )
    } else if(gender){
        res.json(
            usersData.data.filter((u) => 
                u.gender === gender.toLowerCase()
            )
        )
    } else if(age){
        res.json(usersData.data.filter((u) => u.dob.age === Number(age)))
    }
}

module.exports = { getAllUsers, getByUuid, searchByGenderAge, }