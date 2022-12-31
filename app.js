const express = require('express');
const { findMean, findMedian, findMode, validateNumbers } = require('./calculate');

const app = express();

app.use(express.json());

app.get('/mean', (req, res) => {
    data = req.query.nums.split(',').map(Number);
    if (validateNumbers(data) === false){
        return res.status(403).send("Invalid Numbers!!!")
    }
    mean = findMean(data);
    return res.send(`Mean is ${mean}`);
});

app.get('/median', (req, res) => {
    const data = req.query.nums.split(',').map(Number);
    if (validateNumbers(data) === false){
        return res.status(403).send("Invalid Numbers!!!")
    }
    median = findMedian(data);
    return res.send(`Median is ${median}`);
})

app.get('/mode', (req, res) => {
    const data = req.query.nums.split(',').map(Number);
    if (validateNumbers(data) === false){
        return res.status(403).send("Invalid Numbers!!!")
    }
    mode = findMode(data);
    return res.send(`Mode is ${mode}`);
});

app.listen(3000, function() {
    console.log('Server started on port 3000.');
  });