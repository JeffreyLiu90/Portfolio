function digPow(n, p) {
  let power = p - 1;

  const result = n
    .toString()
    .split("")
    .map(num => {
      power++;
      return Math.pow(num, power);
    })
    .reduce((accelerator, currentValue) => {
      return currentValue + accelerator;
    }, 0);

  return (result / n) % 1 === 0 ? result / n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
