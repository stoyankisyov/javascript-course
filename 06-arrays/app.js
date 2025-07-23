const numbers = [1, 2, 3];
console.log('[]:', numbers);

const emptyArray = Array(5);
console.log('Array(5):', emptyArray);

const moreNumbers = Array(5, 2);
console.log('Array(5, 2):', moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log('Array.of(1, 2):', yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log('NodeList:', listItems);

const arrayListItems = Array.from(listItems);
console.log('Array.from(NodeList):', arrayListItems);

const personalData = [25, 'Stoyan', {moreDetail: []}];
console.log('Different types (personalData):', personalData);

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];
console.log('Nested arrays (analyticsData):', analyticsData);

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log('DataPoint:', dataPoint);
  }
}

console.log('personalData[1]:', personalData[1]);

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');
console.log('Push "Reading":', hobbies);

hobbies.unshift('Coding');
console.log('Unshift "Coding":', hobbies);

console.log('Current hobbies:', hobbies);
const poppedValue = hobbies.pop();
console.log('Pop:', 'Popped Value:', poppedValue, 'Current hobbies:', hobbies);

hobbies.shift();
console.log('Shift:', 'Current hobbies:', hobbies);

hobbies[1] = 'Coding';
hobbies[5] = 'Reading';
console.log('Hobbies:', hobbies, 'Hobby at index 4:', hobbies[4]);

hobbies.splice(1, 0, 'Good Food');
console.log('After Splice (add "Good Food" at index 1):', hobbies);

const removedElements = hobbies.splice(-2, 1);
console.log('Hobbies:', hobbies, 'Removed Elements:', removedElements);

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
console.log('Test Results:', testResults);

const sliceResults = testResults.slice(2);
console.log('Slice from index 2:', sliceResults);

const storedResults = testResults.concat([3.99, 2]);
console.log('Concat with [3.99, 2]:', storedResults);

testResults.push(5.91);
console.log(
  'Push(5.91) to testResults (original)',
  'Concat:',
  storedResults,
  'Original:',
  testResults
);

console.log('IndexOf(1.5):', testResults.indexOf(1.5));

console.log('Includes(10.99):', testResults.includes(10.99));

console.log('IndexOf(10.99) !== -1:', testResults.indexOf(10.99) !== -1);

const personData = [{name: 'Max'}, {name: 'Manuel'}];
console.log(
  'Reference type, indexOf({name: "Manuel"}), existing but different reference:',
  personData.indexOf({name: 'Manuel'})
);

const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});
console.log('Find Manuel:', manuel);

manuel.name = 'Anna';
console.log('After changing name to Anna:', manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});
console.log('findIndex:', maxIndex);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  taxAdjustedPrices.push(priceObj);
});
console.log('Mapped using forEach:', taxAdjustedPrices);

const taxAdjustedPricesUsingMap = prices.map((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
  return priceObj;
});
console.log('Mapped using map:', taxAdjustedPricesUsingMap);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log('Sorted prices in asc order:', sortedPrices);

console.log('Sorted prices in desc order (reverse):', sortedPrices.reverse());

const filteredArray = prices.filter((p) => p > 6);
console.log('Filtered prices:', filteredArray);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
console.log('Sum using reduce:', sum);

const data = 'new york;10.99;2000';
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log('Original data:', data);
console.log('Transformed data using split(";"):', transformedData);

const nameFragments = ['Stoyan', 'Kisyov'];
console.log('Name fragments:', nameFragments);
console.log('Joined name:', nameFragments.join(' '));

const copiedNameFragments = [...nameFragments];
console.log('Copied name fragments:', copiedNameFragments);
nameFragments.push('Mr');
console.log(
  'After push:',
  'Original:',
  nameFragments,
  'Copied:',
  copiedNameFragments
);

console.log('Min price using spread operator:', Math.min(...prices));

const persons = [
  {name: 'Stoyan', age: 25},
  {name: 'Manuel', age: 31},
];
const copiedPersons = [...persons];

persons.push({name: 'Anna', age: 29});
persons[0].age = 31;

console.log(
  'Spread operator creates a copy of the reference, which causes change in the copied array after chaning person[0].age in the original:',
  'Original:',
  persons,
  'Copied:',
  copiedPersons
);

const nameData = ['Stoyan', 'Kisyov', 'Mr', 25, 'Developer'];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(
  '[firstName, lastName, ...otherInformation]',
  'FirstName:',
  firstName,
  'LastName:',
  lastName,
  'OtherInformation:',
  otherInformation
);
