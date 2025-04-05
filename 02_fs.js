const fs = require("fs")

fs.writeFile('message.txt', "Node.js is awesome!", (err) => {
    if (err) {
        console.log("Error in creating file")
    } else {
        console.log("File created Successfullly")
    }
})

setTimeout(() => {
    fs.access('message.txt', fs.constants.F_OK, (err) => {
        if (err) {
            console.log("File does not exist!")
        } else {
            fs.readFile('message.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log("error in reading the file")
                } else {
                    console.log(data)
                }
            })
        }
    })
}, 1000)

setTimeout(() => {
    fs.access('message.txt', fs.constants.F_OK, (err) => {
        if (err) {
            console.log("File does not exist!")
        } else {
            fs.unlink('message.txt', (err) => {
                if (err) {
                    console.log("error in deleting the file")
                } else {
                    console.log("File deleted successfully")
                }
            })
        }
    })
}, 2000)



