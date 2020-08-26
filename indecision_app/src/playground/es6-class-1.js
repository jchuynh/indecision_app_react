
// person class, use first uppercase letter
class Person {
    // constructor function in order to do somethign with the data
    //ES6 function
    // Anon is the functon default
    constructor(name = 'Anon', age = 0) {
        // this refers to the class instance
        this.name = name;
        this.age = age;
    }
    // define the next method
    getGreeting() {
        // return 'Hi. I am ' +this.name + '!';
        return `Hi. I am ${ this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

// new is a keyword
const me = new Person('Jessica Huynh', 28);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());