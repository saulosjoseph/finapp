const teste = require('./controller/teste');
const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if(url ==='/'){
        const test = teste.teste();
        res.write(JSON.stringify(test));
        res.end();
    }
    if(url ==='/calculate'){
        const test = teste.teste();
        res.write(JSON.stringify(test));
        res.end();
    }
}).listen(port, () => {
    console.log(`Server running at port ${port}`);
});