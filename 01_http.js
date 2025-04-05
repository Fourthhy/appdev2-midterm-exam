const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    const pathname = parsedURL.pathname;
    const dateAndTime = new Date()

    switch (pathname) {
        case "/":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain')
            console.log(dateAndTime + "" + dateAndTime.getHours() + ":" + dateAndTime.getMinutes() + ":" + dateAndTime.getSeconds())
            res.end(dateAndTime + "" + dateAndTime.getHours() + ":" + dateAndTime.getMinutes() + ":" + dateAndTime.getSeconds())
            break;
        case "/hello":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain')
            console.log("Hello, World!")
            res.end("Hello, World!")
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain')
            console.log("url not found")
            res.end("path not found")
    }
})

// Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
  });
  