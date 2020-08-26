
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

// Creating subclass of person
class Student extends Person {
    // Extend person to student and override some things
    constructor(name, age, major) {
        // You don't need to reset the defaults from person
        super(name, age); // calling the correct parent
        this.major = major;
    }
    hasMajor() {
        // return True is this.major exists
        return !!this.major;
    }
    getDescription() {
        // calling the parent getDescription method
        // using super again
        let description = super.getDescription();

        // check if the student hasMajor is True
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}   

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    // checl to see if the home location exists
    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

// new is a keyword
const me = new Traveler('Jessica Huynh', 28, 'San Jose, CA');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());