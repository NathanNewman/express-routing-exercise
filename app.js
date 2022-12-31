const express = require("express");
const {
  findMean,
  findMedian,
  findMode,
  validateNumbers,
} = require("./calculate");

const app = express();

app.use(express.json());

app.get("/mean", (req, res) => {
  if (Object.keys(req.query) != "nums") {
    return res
      .status(400)
      .send("Nums are required!!! Example: /mean?nums=1,2,3");
  }
  data = req.query.nums.split(",").map(Number);
  if (validateNumbers(data) === false) {
    return res.status(400).send("Invalid Numbers!!!");
  }
  let result = {
    operation: "mean",
    result: findMean(data),
  };

  return res.send(result);
});

app.get("/median", (req, res) => {
  if (Object.keys(req.query) != "nums") {
    return res
      .status(400)
      .send("Nums are required!!! Example: /median?nums=1,2,3");
  }
  const data = req.query.nums.split(",").map(Number);
  if (validateNumbers(data) === false) {
    return res.status(400).send("Invalid Numbers!!!");
  }
  let result = {
    operation: "median",
    result: findMedian(data),
  };

  return res.send(result);
});

app.get("/mode", (req, res) => {
  if (Object.keys(req.query) != "nums") {
    return res
      .status(400)
      .send("Nums are required!!! Example: /mode?nums=1,2,3");
  }
  const data = req.query.nums.split(",").map(Number);
  if (validateNumbers(data) === false) {
    return res.status(400).send("Invalid Numbers!!!");
  }
  let result = {
    operation: "mode",
    result: findMode(data),
  };

  return res.send(result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
