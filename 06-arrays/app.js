const numbers = [1, 2, 3];
console.log('[]', numbers);

const emptyArray = Array(5);
console.log('Array(5)', emptyArray);

const moreNumbers = Array(5, 2);
console.log('Array(5, 2)', moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log('Array.of(1, 2)', yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log('NodeList', listItems);

const arrayListItems = Array.from(listItems);
console.log('Array.from(NodeList)', arrayListItems);

const personalData = [25, 'Stoyan', {moreDetail: []}];
console.log('Different types (perosnalData)', personalData);

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];
console.log('Nested arrays (analyticsData)', analyticsData);

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log('DataPoint', dataPoint);
  }
}

console.log('personalData[1]', personalData[1]);
