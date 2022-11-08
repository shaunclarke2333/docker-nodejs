apt-get update
apt-get install -y python3 python3-pip
pip install flask
pip install flask-mysql
copy application code to /opt/app.py
FLASK_APP=/opt/app.py flask run --host=0.0.0.0

const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Welcome to the beginning of your Kubernetes journey!\n');
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});


