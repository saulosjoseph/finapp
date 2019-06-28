const teste = require('./controller/teste');
const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    const url = req.url;
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(url ==='/' && req.method === 'GET'){
            const test = teste.teste(body);
            res.write(JSON.stringify(test));
            res.end();
        } else if(url ==='/calculate'){
            const test = teste.teste();
            res.write(JSON.stringify(test));
            res.end();
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
}).listen(port, () => {
    console.log(`Server running at port ${port}`);
});