const url = require('url');

const myUrl = 'https://www.example.com:8080/products?category=electronics&sort=price';
const parsedUrl = url.parse(myUrl, true);

// Logging various components of the URL
console.log('Protocol:', parsedUrl.protocol);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Pathname:', parsedUrl.pathname);
const standardQuery = Object.assign({}, parsedUrl.query)
// console.log('Query Parameters:', Object.assign({}, parsedUrl.query).toString());
console.log('Query Parameters:', JSON.stringify(parsedUrl.query))
// console.log('Query Parameters:', "{ category: " + parsedUrl.query.category + ", sort: " + parsedUrl.query.sort + " }")



