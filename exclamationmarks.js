function remove(s){
let i=s.length - 1;
while(s[i] == "!"){
  i--;
  }
  return s.substring(0,i+1);
}
