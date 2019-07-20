function findUnknowNumber(x,y,z) {
  let num = 0;
  while (++num) {
    if (num % 3 == x && num % 5 == y && num % 7 == z)
      return num;
  }
}
