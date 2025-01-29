'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log(`I can drive!`);

// const interface = 'Audio';
// const private = true;
// const if = 23;


function logger() {
    console.log(`My name is Sander`);
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);


// function decleration. Can call the function before its declared
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const myAge = calcAge1(2001);
console.log(myAge);

// function expression. Cannot call the function before ts declared
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const otherAge = calcAge2(1998);

console.log(myAge, otherAge);

// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;

const myAge = calcAge3(2001);
console.log(myAge);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 70 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, 'Sander'));
console.log(yearsUntilRetirement(1980, 'Bob'));

function cutter(fruit) {
    return fruit * 4;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutter(apples);
    const orangePieces = cutter(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2,3));


const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 70 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, 'Sander'));
console.log(yearsUntilRetirement(1950, 'Mike'));


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Sander';
const sander = [firstName, 'Solberg', 2025 - 2001, 'Potato', friends];
console.log(sander);

function calcAge(birthYear) {
    return 2025 - birthYear;
}
const birthYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[birthYears.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

// Add elements from the array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Takes out last element
const removedFriend = friends.pop();
console.log(removedFriend);
console.log(friends);

friends.shift(); // Takes out first element
const otherRemovedFriend = friends.shift();
console.log(otherRemovedFriend);
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
    console.log('Peter is your friend');
}


const sander = {
    firstName: 'Sander',
    lastName: 'Solberg',
    age: 2025 - 2001,
    job: 'Potato',
    friends: ['Michael', 'Steven', 'Peter']
};


const sander = {
    firstName: 'Sander',
    lastName: 'Solberg',
    age: 2025 - 2001,
    job: 'Potato',
    friends: ['Michael', 'Steven', 'Peter']
};
console.log(sander);

console.log(sander.lastName);
console.log(sander['lastName']);

const nameKey = 'Name';
console.log(sander['first' + nameKey]);
console.log(sander['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Sander? Choose between first name, last name, age, job or friends?');

if(sander[interestedIn]) {
    console.log(sander[interestedIn]);
} else {
    console.log(`We don't have data on this`);
}

sander.location = 'Norway';
sander['isHealthy'] = false;
console.log(sander);

console.log(`${sander.firstName} has ${sander.friends.length} friends, and his best friend is ${sander.friends[0]}`);

const sander = {
    firstName: 'Sander',
    lastName: 'Solberg',
    birthYear: 2001,
    job: 'Potato',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return 2025 - birthYear;
    // }

    // calcAge: function() {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : no} drivers license`;
    }
};

console.log(sander.calcAge());

console.log(sander.age);
// console.log(sander['calcAge'](2001));

console.log(sander.getSummary());
*/