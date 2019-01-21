const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.write("<html>");
    res.write("<head><title>Assignment 03</title></head>");
    res.write(
      '<body><h2>Assignment 03</h2><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Add User</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if(url === '/users') {
    res.write("<html>");
    res.write("<head><title>Assignment 03</title></head>");
    res.write(
      `<body><h2>Users page</h2>
        <ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>
      </body>`
    );
    res.write("</html>");
    return res.end();
  }

  if(url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    
    req.on('')
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  
  //console.log(req);
});

server.listen(4444);