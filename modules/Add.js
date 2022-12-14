import Book from './Book.js';
import UI, { loadedBooks, storageKey } from './UI.js';

const nameInput = document.getElementById('nameInput');
const authorInput = document.getElementById('authorInput');

export default class AddBooks {
  static addBook() {
    const book = new Book(nameInput.value, authorInput.value);
    loadedBooks.push(book);
    localStorage.setItem(storageKey, JSON.stringify(loadedBooks));
    UI.loadBook();
    nameInput.value = '';
    authorInput.value = '';
  }
}