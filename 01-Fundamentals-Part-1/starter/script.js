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


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sander'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log(`Don't spend all of your money`);
} else {
    console.log(`Don't be broke`);
}

let height = 0;
if(height) {
    console.log(`Height a thing`);
} else {
    console.log(`Height isn't a thing`);
}


const age = 18;
if(age === 18) console.log(`Congratulations, you're an adult`)

console.log('18' == 18); // True, because type coersion
console.log('18' === 18); // False, because no type coersion

const favourite = Number(prompt(`What is your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 18) { // 18 === 18 -> FALSE
    console.log(`Cool, good choice of number`);
} else if (favourite === 7) {
    console.log(`Cool, also a good number`);
} else {
    console.log(`Boring number`);
}

if (favourite !== 18) console.log(`Why not 18 man :(`) // Don't use !=, it's the loose version and should be avoided


const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (shouldDrive) {
//     console.log(`Can drive, no worries`);
// } else {
//     console.log(`Shouldn't drive, no bueno`);
// }

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

console.log(hasDriversLicense && hasGoodVision && !isTired);

if (shouldDrive) {
    console.log(`Can drive, no worries`);
} else {
    console.log(`Shouldn't drive, no bueno`);
}

const day = prompt(`What day is it today (lowercase letters)`);

switch(day) {
    case `monday`: // day === `monday`
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;
    case `friday`:
        console.log(`Record videos`);
        break;
    case `saturday`:
    case `sunday`:
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Error 404`);
}

if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`Error 404`);
}

const age = 18;
age >= 18 ? console.log(`I drink alcohol`) :
console.log(`I drink water instead`);

const drinkingAge = age >= 18 ? `alcohol` : `water`;
console.log(drinkingAge);

let drink;
if (drinkingAge >= 18) {
    drink = `alcohol`;
} else {
    drink = `water`;
}
console.log(drink);

console.log(`I like to drink ${age >= 18 ? `alcohol` : `water`}`);
*/

// Tasks

// language = 'Norwegian';
// const country = 'Norway';
// const continent = 'Europe';
// const isIsland = false;
// const population = 6;

/*
console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);
*/

// const countryDescription = `${country} is in ${continent} and its ${population} million people speak ${language}`;

// console.log(countryDescription)

// const borderingCountries = Number(prompt(`How many countries does your country border?`));
// console.log(borderingCountries);

// if (borderingCountries === 1) {
//     console.log(`Only 1 bordering country!`)
// } else if (borderingCountries > 1) {
//     console.log(`More than 1 bordering country`);
// } else {
//     console.log(`No bordering countries`);
// }

// console.log(`${country}'s population is ${population < 33 ? `above` : `below`} average`);

/*
// console.log('9' - '5'); // -> 4
// console.log('19' - '13' + '17'); // -> '617'
// console.log('19' - '13' + 17); // -> 23
// console.log('123' < 57); // -> false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

// const language = prompt(`What language is the most spoken natively?`)

// switch(language) {
//     case `chinese`:
//     case `mandarin`:
//         console.log(`This is the most spoken language`);
//         break;
//     case `spanish`:
//         console.log(`This is the 2nd most spoken language`);
//         break;
//     case `english`:
//         console.log(`This is the 3rd most spoken language`);
//         break;
//     case `hindi`:
//         console.log(`This is the 4th most spoken language`);
//         break;
//     case `arabic`:
//         console.log(`This is the 5th most spoken language`);
//         break;
//     default:
//         console.log(`Not as widely spoken, still cool though! :)`);
// }