function anagrams(first, second) {
    if (first.length != second.length) {
      return false;
    }
  
    // Add the values to lookup in {a: 2, b: 1} for first string aab
    const lookup = {};
  
    for(let i=0; i<first.length; i++) {
      let letter = first[i];
      // if letter found in lookup then increment else set to 1
      lookup[letter] ? lookup[letter]+=1 : lookup[letter] = 1;
    }
  
    for(let i=0; i<second.length; i++) {
      let letter = second[i];
      // if letter no found in the lookup return false else reduce letter count in lookup
      if(!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
      return true;
  }
  
  anagrams("anagram", "nagarami"); // should return false
  anagrams("anagram", "nagmi"); // should return false
  anagrams("anagram", "nagaram"); // should return true