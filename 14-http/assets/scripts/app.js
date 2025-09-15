const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchbButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

// Sending an HTTP request using XMLHttpRequest
function sendXMLHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = 'json';

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error('Something went wrong - server-side'));
      }
    };

    xhr.onerror = function () {
      reject(new Error('Failed to send request!'));
    };

    xhr.send(JSON.stringify(data));
  });

  return promise;
}

async function fetchPostsUsingXML() {
  try {
    const responseData = await sendXMLHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title.toUpperCase();
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;

      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPostUsingXML(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  await sendXMLHttpRequest(
    'POST',
    'https://jsonplaceholder.typicode.com/posts',
    post
  );
}

// Sending an HTTP request using Fetch API
function sendFetchApiRequest(url, method, data) {
  return fetch(url, {method: method, body: JSON.stringify(data)}).then(
    (response) => {
      return response.json();
    }
  );
}

async function fetchPostsUsingFetchApi() {
  const responseData = await sendFetchApiRequest(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    postEl.querySelector('li').id = post.id;

    listElement.append(postEl);
  }
}

async function createPostUsingFetchApi(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  await sendFetchApiRequest(
    'https://jsonplaceholder.typicode.com/posts',
    'POST',
    post
  );
}

// EventListeners
fetchbButton.addEventListener('click', fetchPostsUsingFetchApi);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPostUsingFetchApi(enteredTitle, enteredContent);
});

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendXMLHttpRequest(
      'DELETE',
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
