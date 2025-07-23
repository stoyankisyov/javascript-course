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
