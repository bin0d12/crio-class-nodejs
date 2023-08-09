const router = require('express').Router();


const userController = require('../controller/users.controller')


router.get("/", userController.getAllUsers)
router.get("/search", userController.searchByGenderAge)
router.get("/:uuid", userController.getByUuid)

module.exports = router