import  icons from 'url:../../img/icons.svg'; 
import View from './View.js';




class PaginationView extends View {
_parentElement = document.querySelector('.pagination');


addHandlerClick(handler) {
this._parentElement.addEventListener('click', function(e){
    // the below is like query selctor but rather seraches up in the tree
    const btn =e.target.closest('.btn--inline');
    if(!btn) return;
    console.log(btn);
    // He just changed the  the string to a number by just adding a plus sign in the front
    const goToPage = +btn.dataset.goto;
    console.log(goToPage);
    handler(goToPage);
});
const controlPagination = function (goToPage) {
    consoleo.log(goToPage);
}
}


_generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length/this._data.resultsPerPage);
    console.log(numPages);
 // page  1 and there are other pages
if(curPage === 1 && numPages >1)
 {
     return `
     <button data-goto ="${curPage +1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage +1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
     
     `;
 }
 
// last page 
 if(curPage === numPages &&numPages >1 ) {
     return `
     <button data-goto ="${curPage -1}"  class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage -1}</span>
          </button>
     
     
     
     `
 }
 // other page 
 if(curPage <numPages) {
    return `
    <button data-goto ="${curPage -1}" class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${curPage -1}</span>
         </button>
    
     <button data-goto ="${curPage +1}"class="btn--inline pagination__btn--next">
            <span>Page ${curPage +1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
     
     `;
 
}
// page 1 but there are no other pages
 return '';




 }}
 
 
export default new PaginationView();