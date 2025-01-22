/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1991;

// const job; 

var job = "programmer";
job = "neet";

lastName = "Solberg";
console.log(lastName);


// Math operators
const currentYear = 2025; 
const ageSander = currentYear - 2001;
const ageSarah = currentYear - 2018;
console.log(ageSander, ageSarah);

console.log(ageSander * 2, ageSander / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Sander';
const lastName = 'Solberg';
console.log(firstName +  ' ' + lastName);

// Assignement operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageSander > ageSarah); // , <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(currentYear - 2001 > currentYear - 2018);


const currentYear = 2025; 
const ageSander = currentYear - 2001;
const ageSarah = currentYear - 2018;
console.log(currentYear - 2001 > currentYear - 2018);

console.log(25-10-5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge =  (ageSander + ageSarah) / 2
console.log(ageSander, ageSarah, averageAge);


const firstName = 'Sander';
const job = 'Potato';
const birthYear = 2001;
const currentYear = 2025;

const sander = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job;
console.log(sander);

const sanderNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}`;
console.log(sanderNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);

const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving licence')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2001;

if( birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}


// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Sander'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old'); // Converted to a string
console.log('23' - '10' - 3); // Converted to a number
console.log('23' + '10' + 3); // Converted to a string
console.log('23' * '2'); // Converted to a number
console.log('23' / '2'); // Converted to a number

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// Tasks

// language = 'Norwegian';
// const country = 'Norway';
// const continent = 'Europe';
// const isIsland = false;
// const population = 6;

// console.log(population / 2);
// console.log(population + 1);
// console.log(population > 6);
// console.log(population < 33);

// const countryDescription = `${country} is in ${continent} and its ${population} million people speak ${language}`;

// console.log(countryDescription)

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143