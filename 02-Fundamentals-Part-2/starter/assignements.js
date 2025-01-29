// function describeCountry(country, population, capitalCity) {
//     return (`${country} has a population of ${population} million people and its capital city is ${capitalCity}`);
// };

// const describeNorway = describeCountry('Norway', 5, 'Oslo');
// const describeUkraine = describeCountry('Ukraine', 37, 'Kyiv');
// const describeIreland = describeCountry('Ireland', 4, 'Dublin');

// console.log(describeNorway);
// console.log(describeUkraine);
// console.log(describeIreland);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentageOfWorldNorway = percentageOfWorld1(5);
// const percentageOfWorldUkraine = percentageOfWorld1(37);
// const percentageOfWorldIreland = percentageOfWorld1(4);

// console.log(percentageOfWorldNorway);
// console.log(percentageOfWorldUkraine);
// console.log(percentageOfWorldIreland);

// const percentageOfWorld2 = function(population) {
//     return (population / 7900) * 100;
// }

// const percentageOfWorldPhilipines = percentageOfWorld2(117);
// const percentageOfWorldUK = percentageOfWorld2(68);
// const percentageOfWorldSweden = percentageOfWorld2(10);

// console.log(percentageOfWorldPhilipines);
// console.log(percentageOfWorldUK);
// console.log(percentageOfWorldSweden);

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const percentageOfWorldNorway = percentageOfWorld3(5);
// const percentageOfWorldUkraine = percentageOfWorld3(37);
// const percentageOfWorldPhilipines = percentageOfWorld3(117);

// console.log(percentageOfWorldNorway);
// console.log(percentageOfWorldUkraine);
// console.log(percentageOfWorldPhilipines);

// function describePopulation(country, population) {
//     const precentage = percentageOfWorld1(population);
//     const description = `${country} has a population of ${population} million, which is about ${precentage} of the worlds total population`;
//     return description;
// };

// const NorwayDescribed = describePopulation('Norway', 6);
// const UkraineDescribed = describePopulation('Ukraine', 37);
// const UKDescribed = describePopulation('UK', 68);

// console.log(NorwayDescribed);
// console.log(UkraineDescribed);
// console.log(UKDescribed);

// const populations = [5, 4, 37, 68];

// console.log(populations === 4);

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

// console.log(percentages);

// const neighbours = ['Russia', 'Finland', 'Sweden'];
// console.log(neighbours);

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if(!neighbours.includes('Germany')) {
//     console.log('Probably not a central europeaan country :D');
// }

// neighbours[neighbours.indexOf('Sweden')] = 'Kingodm of Sweden';
// console.log(neighbours);

// const myCountry = {
//     country: 'Norway',
//     capital: 'Oslo',
//     language: ['Bokmål', 'Nynorsk'],
//     spokenLanguage: 'norwegian',
//     population: 6,
//     neighbours: ['Russia', 'Finland', 'Sweden']
// };

// console.log(`${myCountry.country} has a population of ${myCountry.population} million ${myCountry.spokenLanguage}-speaking people. ${myCountry.country} has ${myCountry.neighbours.length} neighbouring countries, and its capital is called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry);

// myCountry['population'] -= 2;
// console.log(myCountry);