function repeatedWord(str) {
  if(str === '') return null;
  // make string lower case for comparison
  str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');

  // remove all punctuation
  console.log(str);
  // split the string into array containing individual words an
  let arr = str.split(' ');


  // create a new map to fill
  const theMap = new Map();
  // iterate through array to store as hashmap
  for (let i = 0; i< arr.length; i++) {
    // if the word exists in the map already, return it and be done!
    if(theMap.has(arr[i])) {
      return arr[i];
    }
    // else add it to the map
    theMap.set(arr[i], i);
  }
}

module.exports = repeatedWord;
