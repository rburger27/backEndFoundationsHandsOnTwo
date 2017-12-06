
let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
const states = require('./states');

app.use(morgan('dev'))

app.listen(3000,() => {
  console.log('server running');
})

app.use('/states', states);

module.exports = router;
