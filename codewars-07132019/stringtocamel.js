function toCamelCase(str){
  let word = []
  if(str.includes ("-")){
  word = str.split("-")
  }else if(str.includes ("_")){
  word = str.split("_")
  }
  var newarray1 = [];
  for(var x = 0; x < word.length; x++){
      newarray1.push(word[x].charAt(0).toUpperCase()+word[x].slice(1));
  }
  let words = newarray1.join('');
  if(str.charAt(0)===str.charAt(0).toUpperCase()){
    return words
  }
  if(str.charAt(0)===str.charAt(0).toLowerCase()){
   return (words.charAt(0).toLowerCase()+words.slice(1))
  }
  }
