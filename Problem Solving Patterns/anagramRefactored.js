const validAnagram = (first, second) => {

    // Check to see if the strings match
    // If they don't, it can't be a valid anagram
    if (first.length !== second.length) {
        return false
    }

    // Initialize object
    let lookup = {}

    // If letter exists, increment value by 1, if not, set value to 1
    for (let letter of first) {
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    // 
    for (let letter of second) {
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}

console.log(validAnagram('georgebush', 'hebugsgore'))