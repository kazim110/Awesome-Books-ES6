/* eslint-disable */
import UI, { loadedBooks, storageKey } from './UI.js';

export default class DeleteBook {
  static deleteBook(i) {
    loadedBooks.splice(i, 1);
    localStorage.setItem(storageKey, JSON.stringify(loadedBooks));
    UI.loadBook();
  }
}