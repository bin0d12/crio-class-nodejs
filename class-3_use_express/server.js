const express = require("express");
const app = express();
// controller import
const currController = require("./controller/currencies.controller");
// const usersController = require('./controller/users.controller');
// currencies route

const usersRoutes = require('./routes/usersRoutes')
const currenciesRoutes = require('./routes/currenciesRoutes') 
// app.get("/", (req, res) => {
//   res.send("<h1>currencies Database</h1>");
// });
// app.get("/currencies", (req, res) => {
//     console.log(req.query);
//   res.send(currenciesData);
// });
// app.get("/currencies/:name", currController.getCurrencyBySymbol);
// app.get("/currencies", currController.getCurrenciesData);
// this is for users 
// app.get("/users", usersController.getAllUsers)
// app.get("/users/search", usersController.searchByGenderAge)
// app.get("/users/:uuid", usersController.getByUuid)

// using routes i'm creating the routing
app.use('/users', usersRoutes)
// curiences data 
app.use("/currencies", currenciesRoutes)


app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});


// if you will like this then you will get at some point error because in express
//  first come first serve so we need to use mvc file for that