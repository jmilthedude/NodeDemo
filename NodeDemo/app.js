const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Message Logged: ', arg);
});

logger.log('some message');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World");
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(666);

console.log("Listening on port 666.");



