function binaryToInteger(binary) {
    return parseInt(binary.join(''), 2);
}
let binary = [1,0,1,1,1];
console.log(binaryToInteger(binary));