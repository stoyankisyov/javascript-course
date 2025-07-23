separateSection('Map & WeakMap');
const person1 = {name: 'Stoyan'};
const person2 = {name: 'Manuel'};

const personDataMap = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

personDataMap.set(person2, [{date: 'two weeks ago', price: 100}]);

console.log('Map:', personDataMap);
console.log('Get Stoyan:', personDataMap.get(person1));

console.log('[key, value] of .entries()');
for (const [key, value] of personDataMap.entries()) {
  console.log('Key:', key, 'Value:', value);
}

console.log('Key of .keys()');
for (const key of personDataMap.keys()) {
  console.log('Key:', key);
}

console.log('Value of .values()');
for (const value of personDataMap.values()) {
  console.log('Value:', value);
}

console.log('Size of Map:', personDataMap.size);

let person = {name: 'Stoyan'};
const personDataWeakMap = new WeakMap();
personDataWeakMap.set(person, 'Extra info!');
console.log('WeakMap:', personDataWeakMap);

person = null;
console.log('WeakMap allows garbage collection');
