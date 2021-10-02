/* function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

while (true) {
    console.log('Hello, World!')
    sleep(2000)
} */

// //Load express module with require directive
// var express = require('express')
// var app = express()

// //Define request response in root URL (/)
// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

// //Launch listening server on port 8080
// app.listen(8080, function () {
//     console.log('app listening on port 8080!')
// })


// ==============

//Load express module with require directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send(`Hello World!... - ${new Date()}`)
})

//Launch listening server on port 8080
app.listen(8080, function () {
    console.log('app listening on port 8080!')
})