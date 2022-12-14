/* eslint-disable */
import DeleteBook from './Remove.js';

export const storageKey = 'booksLocalData';
export const loadedBooks = JSON.parse(localStorage.getItem(storageKey)) || null;
const bookslist = document.querySelector('.books-list');

export default class UI {
  static loadBook() {
    bookslist.innerHTML = '';
    if (loadedBooks !== null) {
      for (let i = 0; i < loadedBooks.length; i += 1) {
        bookslist.innerHTML += `<tr class="book-info">
                  <td>
                  "${loadedBooks[i].name}" by ${loadedBooks[i].author} <button class="remove-btn btn btn-outline-primary" id="btn-${i}" value="remove">Remove</button>
                  </td>
                  </tr>`;
      }
    } else {
      const sampleFav = [
        {
          name: 'Harry Potter',
          author: 'J. K. Rowling',
        },
        {
          name: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
        },
      ];
      localStorage.setItem(storageKey, JSON.stringify(sampleFav));
      UI.loadBook();
    }

    const removeBtn = document.querySelectorAll('.remove-btn');
    for (let a = 0; a < loadedBooks.length; a += 1) {
      removeBtn[a].addEventListener('click', () => {
        DeleteBook.deleteBook(a);
      });
    }
  }
}
