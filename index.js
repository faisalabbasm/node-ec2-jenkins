const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.json({'message' : "hello world"});
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});