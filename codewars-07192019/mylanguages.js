function myLanguages(results) {
let finalArray = []

 for ( let key in results) {
   if ( results[key] >= 60) {
     finalArray.push(key)
   }
 }
   finalArray = finalArray.sort(function(a,b){
     return results[b] - results[a] // with the sort we can sort an object in descending order even by value through the object. Here we put in sort the values of the objects. A and b represent the keys of the object
   })
   return finalArray
}
