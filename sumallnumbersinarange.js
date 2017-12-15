// 1. create a variable of array
// 2. pass through two arguments of numbers
// 3. create a variable to store the max number between the 2 numbers
// 4. create another variable to store the min number between the 2 numbers
// 5. create a temporary variable to add the numbers from above
// 6. Adding numbers to get 10


function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var range = [];
  //for loop
  for (var i=min; i <= max; i++)
  //push new array
   range.push(i);
  //add all of those values
  return range.reduce(function(a, b) {
    return a + b;
  });
}

