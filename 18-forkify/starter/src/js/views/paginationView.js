import icons from 'url:../../img/icons.svg';
import { state } from '../model';
import View from './view';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.currentPage;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // on page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return `<button data-goto=${
        currentPage + 1
      } class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>`;
    }

    // last page
    if (currentPage === numPages && numPages > 1) {
      return `<button data-goto=${
        currentPage - 1
      }  class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>`;
    }

    // other page
    if (currentPage < numPages) {
      return `<button data-goto=${
        currentPage - 1
      }  class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button data-goto=${
        currentPage + 1
      }  class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // on page 1, and there are NO other pages
    return `only one page`;

    //   return `
    // <button class="btn--inline pagination__btn--prev">
    //   <svg class="search__icon">
    //     <use href="src/img/icons.svg#icon-arrow-left"></use>
    //   </svg>
    //   <span>Page 1</span>
    // </button>
    // <button class="btn--inline pagination__btn--next">
    //   <span>Page 3</span>
    //   <svg class="search__icon">
    //     <use href="src/img/icons.svg#icon-arrow-right"></use>
    //   </svg>
    // </button>
    //   `;
  }
}

export default new PaginationView();
