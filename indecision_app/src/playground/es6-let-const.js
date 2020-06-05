var nameVar = 'Jessica';
nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jet';
nameLet = 'Julia';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst)


// Block Scoping

var fullName = 'Andrew Huynh';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);