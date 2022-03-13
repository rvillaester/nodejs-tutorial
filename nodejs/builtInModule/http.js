import http from 'http';

// let server = http.createServer();

let server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome');
        res.end();
    }
});

// server.on('connection', socket => {
//     console.log('New connection');
// })
server.listen(8000);
console.log('Listing to port 8000');
