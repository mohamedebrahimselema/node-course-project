const { write } = require('fs');

const http = require('http');
const { brotliDecompressSync } = require('zlib');
const todos = [
    { id: 1, name: "mohamed" },
    { id: 2, name: "mohamed" },
    { id: 3, name: "ahmed" }
]

const server = http.createServer((req, res) => {
    let body = [];
    const { method, url } = req;
   

    req.on('data', chunk =>{
        body.push(chunk);
    })
    req.on('end', () => {
        body = Buffer.concat(body).toString;
        let status = 404;
        const response ={
                success : false,
                data : null
        };
            if (method === 'GET' && url === '/todos') {
            status = 200;
            response.success = true;
            response.data =  todos;
        }
        res.writeHead( status,{
            'Content-type': 'text/json'});
        res.end(JSON.stringify(response));
        
    })

});

const PORT = 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));