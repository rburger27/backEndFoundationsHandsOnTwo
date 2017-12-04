const express = require('express');
const router = express.Router();
const states = [
  {name: 'California', id: 'CA', population: '38.8 Million'},
  {name: 'Texas', id: 'TX', population: '27 Million'},
  {name: 'Florida', id: "FL", population: '19.9 Million'},
  {name: 'New York', id: 'NY', population: '19.8 Million'},
  {name: 'Illinois', id: 'IL', population: '12.9 Million'},
  {name: 'Pennsylvainia', id: 'PA', population: '12.8 Million'},
  {name: 'Ohio', id: 'OH', population: '11.6 Million'},
  {name: 'Georgia', id: 'GA', population: '10.1 Million'},
  {name: 'North Carolina', id: 'NC', population: '10 Million'},
  {name: 'Michigan', id: 'MI', population: '9.9 Million'},
]

router.get('/' , (req, res) => {
  res.send(states)
})

module.exports = router;
