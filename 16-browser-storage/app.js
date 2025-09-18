const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

const userId = 'user123';
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

// Local Storage
storeButton.addEventListener('click', () => {
  localStorage.setItem('userId', userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveButton.addEventListener('click', () => {
  const storedUserId = localStorage.getItem('userId');
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUserId) {
    console.log(`Retrieved User ID: ${storedUserId}`);
  } else {
    console.log('No User ID found in localStorage.');
  }

  if (storedUser) {
    console.log(`Retrieved User: ${JSON.stringify(storedUser)}`);
  } else {
    console.log('No User found in localStorage.');
  }
});

// Session Storage
const sessionData = 'Session Data';

storeButton.addEventListener('click', () => {
  sessionStorage.setItem('sessionData', sessionData);
});

retrieveButton.addEventListener('click', () => {
  const storedSessionData = sessionStorage.getItem('sessionData');

  if (storedSessionData) {
    console.log(`Retrieved Session Data: ${storedSessionData}`);
  } else {
    console.log('No Session Data found in sessionStorage.');
  }
});
