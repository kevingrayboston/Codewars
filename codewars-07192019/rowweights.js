function rowWeights(arr) {
  return [arr.filter((x, i) => i % 2 === 0).reduce((a,b) => a + b, 0),
          arr.filter((x, i) => i % 2 !== 0).reduce((a,b) => a + b, 0)];
}
