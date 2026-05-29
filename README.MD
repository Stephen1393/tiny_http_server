Tiny HTTP Server
A tiny HTTP server built over raw TCP sockets in Node.js.
This project manually parses HTTP requests, formats HTTP responses, handles routing, and returns JSON responses without using Express or other frameworks.
 
Why I Built This
I built this project to better understand what web frameworks abstract away underneath:
•	TCP sockets
•	HTTP request parsing
•	routing
•	HTTP response formatting
•	JSON APIs
Instead of relying on Express, I was curious and wanted to manually code the request/response lifecycle to understand how browsers and servers actually communicate.
 
Features
•	Raw TCP server using Node's net module
•	Manual HTTP request parsing
•	Route handling
•	HTTP response formatting
•	JSON API responses
•	404 handling
 
Architecture

Browser
↓
TCP socket connection
↓
HTTP request text
↓
parseRequest()
↓
routes()
↓
createResponse()
↓
HTTP response
↓
Browser


GET /search
Returns:
{
"results": ["cat", "dog", "bird"],
"count": 3
}


Example Request Parsing
Raw browser request:
Parsed into:

{
method: 'GET',
path: '/',
version: 'HTTP/1.1'
}


What I Learned
•	What TCP and HTTP are, and their differences
•	How browsers communicate with servers
•	How HTTP requests are formatted
•	How routing frameworks work internally
•	How HTTP responses are constructed
•	How JSON APIs work beneath frameworks
 
Running The Project
Install dependencies:
npm install
Run server:
node server.js
Open in browser:
http://localhost:3000
 
Demo
https://www.youtube.com/watch?v=VgjcUOgcXkI
 
Possible Future Improvements
•	Query parameter parsing
•	POST request support
•	HTTP header parsing
•	Connect with my small lexical search engine
 
Tech Used
•	Node.js
•	TCP sockets (net module)
•	JavaScript
