//input - string of character"a-z"
//output - undefined |or| the missing letter
// single possible missing charater

//no special chararters
//no wrap around 'a to z'
//a! = A - false for computer
//case not important

// Example:
// input - "abce"
// output - "d"
// 1. First character of input
// 2. Check if next letter is next in alphabet
//       3. Check if another letter available
//        4. Go to next letter and repeat step 2
//    5. else
//      6. Return undefined
// 7. else
//       8. return expected character 


function fearNotLetter(str) {
    
//   var firstChar = str[0]; 
  for (var i=0; i < str.length - 1; i++) {
      if(str.charCodeAt(i + 1) == str.charCodeAt(i) +1) {
        console.log("Sean is right");
      } else {
        return String.fromCharCode(str.charCodeAt(i) + 1);
//         console.log("Next char is no expected char");
      }
  }
//   console.log("hello");
//   console.log(firstChar.charCodeAt(0));
//   console.log("char code of a:", "a".charCodeAt(0));
  
//   return str;
}

console.log (fearNotLetter("ab"));
