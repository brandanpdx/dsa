function validAnagram(s, t) {

  //Check to see if the strings match, if they don't it can't be a valid anagram
  if (s.length !== t.length) {
    return false;
  }

  // Initialize object
  const lookup = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('racecfar', 'carrace'))