/overall strategy: break up these words at thes spaces and push them into an array, you are going to push them
//into an array based on the number that is within them, that is how you will get them in order of consecutive
//numbers, you will have to split them, and then loop through the array to put them into the array at the right
//position, and then you will use a method to go a head and join that array back together.

function order(words){
  if(words === ""){  //if string is empty result should be an empty string
    return "";
  }
  var wordlist = [];
  words = words.split(" ");
  var first = 1;
  for(var i = 0; i<words.length; i++){
    if(words[i].indexOf(first) > -1){
     wordlist.push(words[i]);
    first++;
    i=-1;
    }
  }
return wordlist.join(" ");
}
