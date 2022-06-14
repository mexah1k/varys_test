const express = require('express');
const SolidityParser = require('./solidity-parser');
const bodyParser = require('body-parser')

var parser = new SolidityParser();
const app = express();
const port = 3001;

app.use(bodyParser.text({ type: '*/*' }))

app.post('/analyze', (req, res) => {
  const result = parser.parse(req.body);

  return res.send(result);
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
