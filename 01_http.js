const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true)
    const pathname = parsedURL.pathname;
    const dateAndTime = new Date()

    switch (pathname) {
        case "/":
            console.log(dateAndTime.toDateString());
            break;
        case "/hello":
            console.log("Hello, World!")
    }
})

// Listen on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
  });
  