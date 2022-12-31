function findMean(nums) {
  mean = nums.reduce((a, b) => a + b, 0) / nums.length;
  return mean;
}

function findMedian(nums) {
  nums = nums.sort((a, b) => a - b);
  const middle = Math.floor(nums.length / 2);
  let median;
  if (nums.length % 2) {
    median = nums[middle];
    return median;
  }
  median = (nums[middle - 1] + nums[middle]) / 2;
  return median;
}

function createFrequencyCounter(nums) {
  return nums.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function findMode(nums) {
  let freqCounter = createFrequencyCounter(nums);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }
  return mostFrequent;
}

// Works because NaN === NaN returns false for some reason
function validateNumbers(nums) {
    return nums.every(num => num === num);
}

module.exports = {
  findMean,
  findMedian,
  findMode,
  validateNumbers,
};
