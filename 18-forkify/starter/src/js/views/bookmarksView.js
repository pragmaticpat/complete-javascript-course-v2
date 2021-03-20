import previewView from './previewView.js';
import View from './view.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `🏷 No bookmarks yet. Find a nice recipe and boomark it! `;
  _successMessage = ``;

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
