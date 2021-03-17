// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false



var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false;
    }
    
    let s1 = t.split('').sort().join('');
    let s2 = s.split('').sort().join('');
    
    if(s1 === s2){
        return true
    } else {
        return false
    }
};

console.log(isAnagram('anagram', 'nagaram'));