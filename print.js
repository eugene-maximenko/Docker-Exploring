const { json } = require('express')
let express = require('express')
let fs = require('fs')
let app = express()

//Define request response in root URL (/)
app.get('/', async function (req, res) {
    const jsonString = fs.readFileSync('./resources/response.json', "utf-8", (err, jsonString) => {
        if (err) {
            console.log('File read failed:', err)
            return
        }

        return JSON.parse(jsonString)
    })

    // Send response
    res.send(`${jsonString} - ${new Date()}`)
})

//Launch listening server on port 8080
app.listen(8080, function () {
    console.log('app listening on port 8080!')
})