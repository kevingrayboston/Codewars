function findEvenIndex(arr){
  let leftOfSum = 0, rightOfSum = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(let i = 0; i < arr.length; i++) {
      if(i > 0) leftOfSum += arr[i-1];
      rightOfSum -= arr[i];

      if(leftOfSum == rightOfSum) return i;
  }

  return -1;
}
