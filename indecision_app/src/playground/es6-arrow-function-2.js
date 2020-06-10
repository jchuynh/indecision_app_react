// arguments object - no longer bound with arrow functions

//es5 function -- an anon function
const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


//convert above function into arrow function:
// you can't use arguments here
const addArrow = (a, b) => a + b;

console.log(addArrow(1, 1));

// this keyword is no loger bound 

const user = {
    name: 'Andrew',
    cities: ['San Jose', "San Francisco"],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        // the work around is to creaate a new variable
        const that = this;

        // cannot use lines below since the function is anon and 
        //  is not bound to the this function
        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        })
    }
};


const user2 = {
    name: 'Andrew',
    cities: ['San Jose', "San Francisco"],
    printPlacesLived2() {


        // array method - map
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        });
        return cityMessages;
    }
};

console.log(user2.printPlacesLived2());