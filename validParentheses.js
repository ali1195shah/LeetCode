// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true


var isValid = function(s) {

    let stackArr = [];
    
    for (let i = 0; i < s.length; i++){
        
        let char = s[i];
        
        if(char == '(') {
             stackArr.push(')');
        } else if (char == '{') {
            stackArr.push('}')
        } else if (char == '[') {
            stackArr.push(']')
        } else if (char !== stackArr.pop()) {
            return false
        }
    }

    
    if(stackArr.length == 0) {
        return true
    }else {
        return false
    }
};

console.log(isValid("()[]{}"))