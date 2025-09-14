const button = document.querySelector('button');
const button2 = document.getElementById('button2');
const form = document.querySelector('form');

const onButtonClick = () => {
  alert('You clicked the button!');
};

const onButton2Hover = (event) => {
  console.log(event);
};

const boundFn = onButtonClick.bind(this);

button.addEventListener('click', boundFn);
button2.addEventListener('mouseover', onButton2Hover);

window.addEventListener('scroll', (event) => {
  console.log(event);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

setTimeout(() => {
  button.removeEventListener('click', onButtonClick);
}, 5000);
