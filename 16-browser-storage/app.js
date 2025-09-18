const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

storeButton.addEventListener('click', () => {
  const userId = '1';
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
  };

  document.cookie = `userId=${userId}; max-age=2`;
  document.cookie = `user=${JSON.stringify(user)};`;
});

retrieveButton.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((cookie) => {
    return cookie.trim();
  });

  console.log(data);
});
