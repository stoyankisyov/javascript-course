const storeButton = document.getElementById('store-btn');
const retrieveButton = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  const objectStore = db.createObjectStore('products', { keyPath: 'id' });

  objectStore.transaction.oncomplete = (event) => {
    const productStore = db.transaction('products', 'readwrite').objectStore('products');
    productStore.add({ id: 1, name: 'Product 1', price: 100 });
    productStore.add({ id: 2, name: 'Product 2', price: 200 });
    productStore.add({ id: 3, name: 'Product 3', price: 300 });
  };
};

dbRequest.onerror = (event) => {
  console.error('Error opening database:', event.target.error);
};
