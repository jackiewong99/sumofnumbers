const nums = [1, 2, 3, 4, 5];

const sumFor = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const sumWhile = (arr) => {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total;
};

const sumRecursion = (arr) => ((arr.length === 0) ? 0 : arr[0] + sumRecursion(arr.slice(1)));

const sumTheSimpleWay = (arr) => _.reduce(arr, (total, num) => total + num);

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));
