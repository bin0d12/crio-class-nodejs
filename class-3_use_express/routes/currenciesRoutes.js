const router = require('express').Router();


const currenciesController = require('../controller/currencies.controller');

// router.get("/", currenciesController.getAllCurrenciesData)
router.get("/", currenciesController.getCurrenciesData);
router.get("/:name", currenciesController.getCurrencyBySymbol);

module.exports = router
