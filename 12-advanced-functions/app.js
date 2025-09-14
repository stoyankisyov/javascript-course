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
