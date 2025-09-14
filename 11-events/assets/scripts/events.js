const button = document.querySelector('button');

const onButtonClick = () => {
  alert('You clicked the button!');
};

const boundFn = onButtonClick.bind(this);

button.addEventListener('click', boundFn);

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 5000);
