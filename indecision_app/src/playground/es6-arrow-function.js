// const square = function (x) {
//   return x * x;
// };

// console.log(square(3));



// using arrow functions
// the are always anoymous
// only returns a single expression

// const squareArrow = (x) => {
// 	return  x * x; // returns an experssion
// };

// do not use return anywhere 
// cannot use function calls or promises
// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// ChHALLENGE
// verbose method
const getFirstName = function (fullName) {
	return fullName.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));

// arrow function method
const getFirstName2 = (fullname) => fullname.split(' ')[0];

console.log(getFirstName2('Jessica Huynh'));