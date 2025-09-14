const button = document.querySelector('button');
const button2 = document.getElementById('button2');

const onButtonClick = () => {
  alert('You clicked the button!');
};

const onButton2Hover = (event) => {
  console.log(event);
};

const boundFn = onButtonClick.bind(this);

button.addEventListener('click', boundFn);
button2.addEventListener('mouseover', onButton2Hover);

setTimeout(() => {
  button.removeEventListener('click', onButtonClick);
}, 5000);
