// Ex2.1 - Sum of lowest numbers 
// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumOfTwoLowestPositive(num) {
    num.sort(function(a, b){return a-b});
    return num[0] + num[1];
}
let num = [19, -5, 42, 2, 77];
console.log(sumOfTwoLowestPositive(num));