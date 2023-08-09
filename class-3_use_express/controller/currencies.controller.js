const currenciesData = require("../../currenciesData.json");
const env = require('dotenv').config()
const password = "binod"

const verifyPwd = (req) => {
  console.log(req.headers);
  const {authorization} = req.headers;
  if(authorization === password){
    return true
  } else {
    return false
  }
}
getCurrenciesData = (req, res) => {
  if(!verifyPwd(req)) return res.sendStatus(403)
  res.send(currenciesData)
  const minValue = req.query.min_value;
  if (minValue) {
    res.json(
      currenciesData.data.filter((c) => Number(c.min_size) === Number(minValue))
    );
  } else {
    return "Please provide a minimum value";
  }
};
getCurrencyBySymbol = (req, res) => {
  const currName = req.params.name;
  const symbolData = currenciesData.data.find(
    (val) => val.id === currName.toUpperCase()
  );
  if (symbolData) {
    res.json(symbolData);
  } else {
    res.sendStatus(404);
  }
};
module.exports = { getCurrenciesData, getCurrencyBySymbol };
