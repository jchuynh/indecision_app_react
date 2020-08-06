// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(56, 1, 1001));

// this keywords - no longer bound

const user = {
    name: 'Jessica',
    cities: ['Santa Cruz', 'San Jose', 'San Francisco'],
    printPlacesLived() {
        return this.cities.map((city) => 
            this.name + ' has lived in ' + city);

        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);

    }
};
console.log(user.printPlacesLived());

// Trying to access cities to undefined need to use es5 

// CHALLENGE

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) =>
        this.multiplyBy * number);
    }
    // numbers - array or numbers 
    // mutiplyBy - single number 
    // multiply - retunr a new array where the number have been
    // multiplied
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 [ 2, 4, 6]