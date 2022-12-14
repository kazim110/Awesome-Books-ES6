import UI from './modules/UI.js';
import AddBooks from './modules/Add.js';
import { DateTime } from './modules/luxon.js';
// import DeleteBook from './modules/Remove.js';

const addBtn = document.querySelector('.add-btn');

// -----Nav Items
const list = document.querySelector('.list-nav');
const add = document.querySelector('.add-nav');
const contact = document.querySelector('.contact-nav');

const allBooks = document.querySelector('.all-awesome-books');
const addBooks = document.querySelector('.add-awesome-books');
const contactBooks = document.querySelector('.contact-awesome-books');

const displayDate = () => {
  const dt = DateTime.local();

  const newDate = dt.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const newTime = dt.toLocaleString(DateTime.TIME_WITH_SECONDS).toLowerCase();

  document.querySelector('.date').textContent = `${newDate}, ${newTime}`;
};

window.onload = () => {
  allBooks.classList.add('show');
  addBooks.classList.add('hide');
  contactBooks.classList.add('hide');
  UI.loadBook();
  displayDate();
};

addBtn.addEventListener('click', AddBooks.addBook);

// ---------Navigation...........//

list.addEventListener('click', () => {
  allBooks.classList.replace('hide', 'show');
  addBooks.classList.replace('show', 'hide');
  contactBooks.classList.replace('show', 'hide');
});

add.addEventListener('click', () => {
  addBooks.classList.replace('hide', 'show');
  allBooks.classList.replace('show', 'hide');
  contactBooks.classList.replace('show', 'hide');
});

contact.addEventListener('click', () => {
  contactBooks.classList.replace('hide', 'show');
  allBooks.classList.replace('show', 'hide');
  addBooks.classList.replace('show', 'hide');
});
