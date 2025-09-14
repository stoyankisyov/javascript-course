// Pure Function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3));

// Impure Function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// Factory Function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVAT = createTaxCalculator(0.2);
const calculateIncomeTax = createTaxCalculator(0.25);

console.log(calculateVAT(100));
console.log(calculateIncomeTax(100));

// Closure
let name = 'Stoyan';

function greet() {
  console.log('Hi ' + name);
}

name = 'Dimitar';

greet();

// Recursion
function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Stoyan',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari',
            },
            {
              name: 'Amilia',
              friends: [
                {
                  name: 'Zoe',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Julia',
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];
  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
