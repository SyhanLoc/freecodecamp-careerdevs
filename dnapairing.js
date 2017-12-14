// 1. split input int a string array.
// Working with single char

// 2. firstCar = inputArray[0]
// 3. check if firstChar is G


// 	create pair [G, C]
// Else if firstChar is C
// 	Create pair[C, G]
// Else if firstChar is A
// 	Create pair [A, T]
// Else if firstChar is
// 	Create pair [T, A]
// End if

// 4 Add to strand variable
// 5 repeat step 3 for additional chars
// 6 Return strand
function pairElement(str) { 
  
  var charArray = str.split('');
  
  var dnaPairArray = [];
  
  for (var i = 0; i < charArray.length; i++) {
    if (charArray[i] === "G") {
      dnaPairArray.push(["G", "C"]);
    } else if (charArray[i] === "C") {
      dnaPairArray.push (["C", "G"]);
    } else if (charArray[i] === "T") {
      dnaPairArray.push(["T", "A"]);
    } else if (charArray[i] === "A") {
      dnaPairArray.push(["A", "T"]);
    }
   
  } 
  return dnaPairArray;
}

pairElement("GCG");
