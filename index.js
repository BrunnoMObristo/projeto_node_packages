const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output.pdf'));

// Embed a font, set the font size, and render some text
doc  
  .fontSize(25)
  .text('Aprecie!', 100, 100);

// Add an image, constrain it to a given size, and center it vertically and horizontally
 doc.image('img/bleach.jpg', {
   fit: [550, 300],
   align: 'center',
   valign: 'center'
 });

doc.end();
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Observe a pasta do projeto, um arquivo PDF foi gerado');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});