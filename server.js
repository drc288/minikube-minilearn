let http = require('http');

let handleRequest = (req, res) => {
    console.log("Received request for URL: " + req.url);
    res.writeHead(200);
    res.end("Hello word");
};

let www = http.createServer(handleRequest);
www.listen(8080);