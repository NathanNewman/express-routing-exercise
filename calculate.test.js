const {
  findMean,
  findMedian,
  frequencyCounter,
  findMode,
  validateNumbers,
} = require("./calculate");

test("find the mean of nums", () => {
  let nums = [1, 2, 3];
  let mean = findMean(nums);
  expect(mean).toEqual(2);
});

test("find the median of nums", () => {
  let nums = [3, 1, 2];
  let median = findMedian(nums);
  expect(median).toEqual(2);
});

test("count the freqency of numbers in nums", () => {
    let nums = [1, 2, 2, 3];
    let frequency = frequencyCounter(nums);
    expect(frequency).toEqual({'1':1,'2':2,'3':1});
});

test("find the mode of nums", () => {
  let nums = [3, 2, 1, 2];
  let mode = findMode(nums);
  expect(mode).toEqual(2);
});

test("Validate numbers in nums", () =>{
    let nums = [1,2,3,NaN];
    let validate = validateNumbers(nums);
    expect(validate).toEqual(false);
});