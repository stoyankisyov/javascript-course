const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const deleteMovieModal = document.getElementById('delete-modal');

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const showDeleteMovieModal = () => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove('visible');
  toggleBackdrop();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element_image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element_info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));

  listRoot.append(newMovieElement);
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }

    movieIndex++;
  }

  movies.splice(movieIndex, 1);
  listRoot.children[movieIndex].remove();

  closeMovieDeletionModal();
  updateUI();
};

const backdropClickHandler = () => {
  toggleBackdrop();
  closeMovieModal();
  closeMovieDeletionModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5).');
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);

  closeMovieModal();
  clearMovieInputs();

  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const cancelMovieModalHandler = () => {
  closeMovieModal();
};

const deleteMovieHandler = (movieId) => {
  showDeleteMovieModal();

  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
  cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);

  cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    'click',
    deleteMovie.bind(null, movieId)
  );
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelMovieModalHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
