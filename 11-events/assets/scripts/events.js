const button = document.querySelector('button');
const button2 = document.getElementById('button2');
const form = document.querySelector('form');
const div = document.querySelector('div');
const list = document.querySelector('ul');

const onButtonEvent = (event, message) => {
  console.log(message);
  console.log(event);
};

const boundFn = onButtonEvent.bind(this, 'Button clicked');

button.addEventListener('click', boundFn);
button2.addEventListener('mouseover', (event) =>
  onButtonEvent(event, 'Hovering')
);

window.addEventListener('scroll', (event) => onButtonEvent(event, 'Scrolling'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

div.addEventListener(
  'click',
  (event) => {
    onButtonEvent(event, 'Div clicked');
  },
  true // Capturing phase
);

list.addEventListener('click', (event) => {
    event.target.classList.toggle('highlight');
});

setTimeout(() => {
  button.removeEventListener('click', boundFn);
}, 5000);
