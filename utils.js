const fs = require('fs')
const path = require('path')

module.exports = {
    getData,
    writeData
}

// Function for reading JSON
function getData(dataFile, callback) {
    const filename = path.join(__dirname, dataFile)

    fs.readFile(filename, 'utf8', (err, contents) => {
        if (err) {
            console.error('Unable to read data file')
            callback(new Error('Oops! Looks like that data does not exist. Shame!'))
            return
        }
        try {
            const parsedData = JSON.parse(contents)
            callback(null, parsedData)
        } catch (parseError) {
            console.error(parseError)
            callback(new Error('Unable to parse data file'))
        }
    })
}

// Function for editing the JSON data file
function writeData(dataFile, data, callback) {
    getData(dataFile, (err, data) => {
        if (err) {
            res.status(500).send('Whoops! Somebody stuffed up. Hold on one sec!')
            return
        }
        // Manipulate the data to just write the parts we need
        
    })
    const filename = path.join(__dirname, dataFile)
    fs.writeFile(filename, JSON.stringify(data, null, 2), 'utf-8', (err, contents) => {
        if (err) {
            console.error('Unable to read data')
            callback(new Error('Oops! Looks like that data does not exist. Shame!'))
            return
        }
        try {
            const stringifiedData = JSON.stringify(contents)
            callback(null, stringifiedData)
        } catch (stringifyError) {
            console.error(stringifyError)
            callback(new Error('Unable to write data file'))
        }
    })
}