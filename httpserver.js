const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode=200;
  res.setHeader('Content-Type','text/html')
  res.end('<h1>Hello Connection</h1><p>This is all about connection with the server</p>');
  
})

//server.listen({
//host: 'localhost',
//port: '80',
//exclusive: true

//});
server.listen(port, ()=>{console.log('This is a port on ${port}');})
