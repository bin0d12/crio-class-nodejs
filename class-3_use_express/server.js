const express = require("express");
const currenciesData = require("../currenciesData.json");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>currencies Database</h1>");
});
app.get("/currencies", (req, res) => {
    console.log(req.query);
  res.send(currenciesData);
});
app.get("/currencies/:name", (req, res) => {
  const currName = req.params.name;
  const symbolData = currenciesData.data.find(
    (val) => val.id === currName.toUpperCase()
  );
  if (symbolData) {
    res.json(symbolData);
  } else {
    res.sendStatus(404);
  }
});
app.get("/currencies", (req, res) => {
    const minValue = req.query.min_size;
    if(minValue){
        res.json(currenciesData)
    }
    console.log(minValue);
})
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
