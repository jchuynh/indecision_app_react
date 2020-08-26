'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// person class, use first uppercase letter
var Person = function () {
    // constructor function in order to do somethign with the data
    //ES6 function
    // Anon is the functon default
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anon';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        // this refers to the class instance
        this.name = name;
        this.age = age;
    }
    // define the next method


    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            // return 'Hi. I am ' +this.name + '!';
            return 'Hi. I am ' + this.name;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old.';
        }
    }]);

    return Person;
}();

// Creating subclass of person


var Student = function (_Person) {
    _inherits(Student, _Person);

    // Extend person to student and override some things
    function Student(name, age, major) {
        _classCallCheck(this, Student);

        // calling the correct parent
        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
        // You don't need to reset the defaults from person


        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            // return True is this.major exists
            return !!this.major;
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            // calling the parent getDescription method
            // using super again
            var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

            // check if the student hasMajor is True
            if (this.hasMajor()) {
                description += ' Their major is ' + this.major + '.';
            }

            return description;
        }
    }]);

    return Student;
}(Person);

var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    // checl to see if the home location exists


    _createClass(Traveler, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);

            if (this.hasHomeLocation()) {
                greeting += ' I\'m visiting from ' + this.homeLocation + '.';
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

// new is a keyword


var me = new Traveler('Jessica Huynh', 28, 'San Jose, CA');
console.log(me.getGreeting());

var other = new Traveler();
console.log(other.getGreeting());
