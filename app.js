const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
let users = [
    {
        name: 'Maxim'
    },
    {
        name: 'Ruslan'
    },
    {
        name: 'Anton'
    }
];

const server = http.createServer((req, res) => {
    if (req.url === '/user') {
        switch (req.method) {
            case 'GET':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(JSON.stringify(users));
                break;
            
            case 'POST':
                users.push({name: 'Kirill'});
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end();
                break;

            case 'PUT':
                users = [1, 2, 3];
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end();
                break;

            default:
                res.statusCode = 404;
                res.end('Not found');
                break; 
        }
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});