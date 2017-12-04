
let express = require('express');
let bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
const states = require('./states');

app.listen(3000,() => {
  console.log('server running');
})

app.use('/states', states);

module.exports = router;
