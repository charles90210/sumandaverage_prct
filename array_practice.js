

// Create an array with five decimal numbers, and use it for the following:
//
// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.

//declare an array with five decimal numbers
var numbers = [1.2, 3.4, 5.6, 7.8, 8.9];
//function that checks highestNumber within the numbers array and returns max number.
function highestNumber(numbers) {
  return Math.max.apply(null, numbers);
}

//challenge 1b



var numbers = [8.9, -1.2, 3.4, 5.6, 7.8];
var max = 0;

for (var index = 0; index < numbers.length; index++) {
  var element = numbers[index];

  if(max < element){
    max = element;
  }

}

console.log(max);
//end of max number function

//lowest number function
//declared array variables
var numbers = [8.9, -1.2, 3.4, 5.6, 7.8];
var max = 0;
//have the function check for the lowest number by looping throughout the array.
function lowestNumber(x){
  //check for each number within the array incrementaly. If max element is more than min element then keep looping and update new max with new element.
  x.forEach(function(element){
    if(max > element){
      max = element;
    }
  })
  console.log(max);

}
lowestNumber(numbers);
//end of the lowest numbers function

//beginning of the smallest (closer to zero) number

var numbers = [8.9, -1.2, 0.001, 1.6, 7.8];
//max number = 8.9...the highest number in the array.
var smallest = 0;

//create a function that finds the smallest number (closest to  zero) in the array.
function smallestNumber(numbers){
  var smallest = 0;
  // a for loop that begins at the index of [0], which is, is currently 8.9...then loops through each index until the max length of the array...and it increments throughout the array by an increment of 1 until it stops.
  for (var index = 0; index < numbers.length; index++) {
    // we are declaring a variable called element which is set to numbers[index]...which means that element is = to the array index...
    var element = numbers[index];
    //so, if max, which is currently zero, is greather than the element...then we update the smallest variable to equal numbers[index].
    if (numbers[index] < numbers[smallest]);
    smallest = numbers[index];

  }

  //then, when all is said and done, we will print the smallest variable...which, in the end, equals numbers[index]...which equals......something.
  return smallest;

}


var a = [8.9, -1.2, 0.001, 1.6, 7.8, 1.1, 3.2, 0.05, -3.2];
var smallest = 0;


function smallestNumber(a) {
  var smallest = 0;

  for (var index = 0; index < a.length; index++) {

    // var element = numbers[index];

    if (a[index] < a[smallest]);
    smallest = a[index];

  }

  return smallest;

}

//so, the code may be right...but there's an issue with a greater force.


//find the sum
var a = [8.9, -1.2, 0.001, 1.6, 7.8, 1.1, 3.2, 0.05, -3.2].reduce(getSum, 0);
var c = 9
function getSum(a, b) {
  return a + b;

}

console.log(a);



//find the mean
//these can only be done with  the math.js library...found at http://mathjs.org/docs/reference/functions/mean.html



//back to the mean

var a = [8.9, -1.2, 0.001, 1.6, 7.8, 1.1, 3.2, 0.05, -3.2]
var result = 0;
var average = 0 ;

for (var index = 0; index < a.length; index++)
{
  result += a[index];
}

average = (result/a.length);
console.log(average);




var numberArray=[1,2,3,4,5], thisTotal=0,thisAverage=0;
// add elements of array together
for(var i=0;i<numberArray.length;i++)
 {thisTotal+=numberArray[i];}
// calculate average
thisAverage=(thisTotal/numberArray.length);
// display result
console.log(thisAverage)
