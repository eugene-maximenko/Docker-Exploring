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
// let express = require('express')
// let app = express()

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
const { json } = require('express')
let express = require('express')
let fs = require('fs')
let app = express()
const path = require('path')

const responseJSON = path.join(__dirname, '../resources/response.json')
// let fileData

// fs.readFile('./resources/response.json', "utf-8", (err, jsonString) => {
//     if (err) {
//         console.log('File read failed:', err)
//         return
//     }

//     fileData = JSON.parse(jsonString)
// })

let fileData
//Define request response in root URL (/)
app.get('/', async function (req, res) {
    const jsonString = fs.readFileSync('./resources/response.json', "utf-8", (err, jsonString) => {
        if (err) {
            console.log('File read failed:', err)
            return
        }

        console.log(JSON.parse(jsonString))
        return JSON.parse(JSON.parse(jsonString))
    })
    console.log(typeof jsonString)
    res.send(`${jsonString} - ${new Date()}`)
})

//Launch listening server on port 8080
app.listen(8080, function () {
    console.log('app listening on port 8080!')
})