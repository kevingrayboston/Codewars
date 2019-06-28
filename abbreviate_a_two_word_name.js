function abbrevName(name){
  let array = name.split(' ');
  let [first, last] = array;
  let outcome = array[0].charAt(0).toUpperCase()+'.' + array[1].charAt(0).toUpperCase();
    return outcome
}
