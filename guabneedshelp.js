function f(n){
let sum = 0;
if(typeof n == "number" && n>0 && n == parseInt(n)){
  for (let i = 0; i <= n; i++){
    sum = sum+(n/2);
  }
  return sum
}else{
  return false
}
}
