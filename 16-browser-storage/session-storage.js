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
