const express = require('express');
const http = require('http');
const currenciesData = require('./currenciesData.json')
const smallData = require('./curr.json')
PORT = 3000;
// const app = http.createServer((req, res) => {
//     console.log(req.url);
//     if(req.url === "/status"){
//         res.writeHead(200, {"Content-Type": "application/json"})
//         const responseVal = {
//             "name": "binod",
//             "age": 26,
//             currentDate: new Date().toLocaleDateString(),
//             current_time: new Date().toLocaleTimeString()
//         }
//         res.write(JSON.stringify(responseVal))
//         res.end()
//     } else {
//         res.write(`<h1>this is an error</h1>`)
//         res.end()
//     }
// })
const app = http.createServer((req, res) => {
    const splitUrl = req.url.split('/')
    console.log(splitUrl);
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "application/html"}),
        res.write("<h1>CUrrency Database</h1>");
        res.end()
    }
   else if(splitUrl[1] === "currencies"){
    if(splitUrl[2]){
        const curSymbol = splitUrl[2]
        const symbolData = currenciesData.data.find(val => val.id === curSymbol.toUpperCase())
        if(symbolData){
        res.writeHead(200, {"Content-Type": "application/json"}),
        res.write(JSON.stringify(symbolData))
        res.end()
        } else{
        res.write("404 not found")
        }
    } else {
        res.writeHead(200, {"Content-Type": "application/json"}),
        res.write(JSON.stringify(currenciesData))
        console.log("callingggg");
        res.end()
    }
   } 
//    else if(splitUrl[1] === "currencies"){
//     if(splitUrl[2]){
//         const curSymbol = splitUrl[2].toUpperCase();
//         let currencyCityName = req.url.find(val => val.data.name === curSymbol)
//         if(currencyCityName){
//             res.writeHead(200, {"Content-Type": "application/json"}),
//             res.write(JSON.stringify(currencyCityName))
//             res.end()
//         }
//     } else {
//         res.write("404 not found")
//     }
//    }
   else {
        res.write("404 not found")
        res.end()
    }
})

app.listen(PORT, () => {
    console.log(`server listening on port is ${PORT}`);
})