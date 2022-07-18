const {Console} = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode=200;
  res.setHeader('Content-Type','text/html')
  console.log(req.url)
  if(req.url=='/'){
    res.statusCode=200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  }
  else if(req.url=='/about'){
    res.statusCode=200;
    res.end('<h1>Welcome to Coding with Adina</h1><p>This is an about page</p>');
  }
  else if(req.url=='/hello'){
    res.statusCode=200;
    res.end('<h1>Welcome to Coding with Adina</h1><p>This is the Hello page</p>');

  }
  else {
   // res.adina();
    res.statusCode=404;
    res.end('<h1>Not Found</h1><p>Sorry! We are unable to locate this page on this server</p>');
  }

  
  
 
})
server.listen(port, ()=>{console.log('This is a port on ${port}');
});


