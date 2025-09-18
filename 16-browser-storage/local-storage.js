const userId = 'user123';
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

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
