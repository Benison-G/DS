// For a given array of strings, and the passed in charatedx, return the indexes of the
// strings/words in array containing x
// Ex: ["leet", "code", "test"] should return [0, 2]

var findWordsContaining = function(words, x) {
    let collection = [];
   for(let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                collection.push(i)
            }
        }
   }

    return collection;
};

console.log(findWordsContaining(["leet", "code"], "e"));