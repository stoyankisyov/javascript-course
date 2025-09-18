const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = (event) => {
  db = event.target.result;
};

dbRequest.onupgradeneeded = (event) => {
  db = event.target.result;

  const objectStore = db.createObjectStore('products', {keyPath: 'id'});

  objectStore.transaction.oncomplete = (event) => {
    if (!db) {
      return;
    }

    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productStore.add({id: 1, name: 'Product 1', price: 100});
    productStore.add({id: 2, name: 'Product 2', price: 200});
    productStore.add({id: 3, name: 'Product 3', price: 300});
  };
};

dbRequest.onerror = (event) => {
  console.error('Error opening database:', event.target.error);
};

storeButton.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productStore.add({id: 4, name: 'Product 1', price: 100});
  productStore.add({id: 5, name: 'Product 2', price: 200});
  productStore.add({id: 6, name: 'Product 3', price: 300});
});

retrieveButton.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');

  const request = productStore.get(1);

  request.onsuccess = (event) => {
    console.log(request.result);
  };
});
