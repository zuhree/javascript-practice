function rangeofNumber(n) {
  const arr = [];
  try {
    if (n > 1) {
      for (let i = 0; i <= n; i++) {
        arr.push(i);
      }
    }
  } catch (error) {
    return "Invalid number";
  }
  return arr;
}

console.log(rangeofNumber(5));
