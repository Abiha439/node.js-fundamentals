const fs = require('fs');

fs.writeFile('data.txt', 'Hello, this is my Node.js fs module practice!', (err) => {
  if (err) throw err;
  console.log(' File written successfully ');

  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('📄 File content:', data);
  });
}); 