separateSection('Set & WeakSet');
const ids = new Set([1, 2, 3, 4, 5]);
console.log('Initial Set:', ids);

ids.add(2);
console.log('Set after adding 2:', ids);

ids.delete(3);
console.log('Set after deleting 3:', ids);

ids.delete(60);
console.log('Set after trying to delete 60:', ids);

console.log('entry of .entries():');
for (const entry of ids.entries()) {
  console.log('Entry:', entry);
  console.log('Entry value (entry[0]):', entry[0]);
}

let person3 = {name: 'Stoyan'};
const personsSet = new WeakSet();
personsSet.add(person3);

person3 = null;
console.log('WeakSet allows garbage collection');
