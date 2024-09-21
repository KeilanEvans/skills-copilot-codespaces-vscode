// Create web server
// Create a web server that listens to incoming requests on port 3000 and responds with the comments array. 
// If a user visits the main route, it should return the comments array. 
// If a user visits the /comments route, it should return the comments array as well.

// Importing the comments array from the data file
const comments = require('./data');

// Importing the http module
const http = require('http');

// Creating the server
const server = http.createServer((req, res) => {
    // Setting the content type to JSON
    res.setHeader('Content-Type', 'application/json');
    // Checking the requested URL
    if (req.url === '/comments' || req.url === '/') {
        // Sending the comments array as a response
        res.end(JSON.stringify(comments));
    } else {
        // Sending a 404 status code
        res.writeHead(404, {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Node.js'
        });
        // Sending an error message
        res.end(JSON.stringify({
            message: 'Route not found'
        }));
    }
});

// Listening on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// In this example, we created a web server that listens to incoming requests on port 3000. 
// When a user visits the main route or the /comments route, it returns the comments array. 
// If the user visits any other route, it returns a 404 status code with an error message. 
// This is a basic example of creating a web server using Node.js.

// To run this file, you can use the following command:
// node comments.js

// You can then visit http://localhost:3000 or http://localhost:3000/comments to see the comments array. 
// If you visit any other route, you will see a 404 error message