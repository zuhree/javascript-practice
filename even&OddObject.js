let numberArr = [28, 31, 47, 68, 102, 1025, 765];

let numbers = {
  even: numberArr.filter((even) => even % 2 === 0),
  odd: numberArr.filter((even) => even % 2 !== 0),
};

console.log(numbers);
