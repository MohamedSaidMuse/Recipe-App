

import View from './View.js';

import  icons from 'url:../../img/icons.svg'; 



import {Fraction} from 'fractional';

class RecipeView 
extends View 
{
  _parentElement = document.querySelector('.recipe');
  _errorMessage=" we could not find that recipe, pleas etry another one!";
  _message ='';
  
addHandlerRender(handler) {

['hashchange','load'].forEach( elm => 
  window.addEventListener(elm,handler)
  
  );}
  addHandlerUpdateServings(handler) {

 this._parentElement.addEventListener('click', function(e){
 const btn  = e.target.closest('.btn--update-servings');
 if(!btn) return;

 const {updateTo} = btn.dataset;
 console.log(updateTo);
 if(+updateTo>0)
 handler(+updateTo);


 });


  }
addHandlerAddBookmark(handler) {
this._parentElement.addEventListener('click', function(e){
const btn = e.target.closest('.btn--bookmark');
if(!btn) return 
handler();



}


);

}


_generateMarkup(){
return`
   <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings"
          data-update-to ="${this._data.servings-1}"=>
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings"
          data-update-to ="${this._data.servings+1}"
          >
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="recipe__user-generated">
        
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${this._data.bookmarked ?'-fill':'' }"></use>
        </svg>
      </button>
    </div>
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      
      ${this._data.ingredients.map(ing => {
return `
<li class="recipe__ingredient">
<svg class="recipe__icon">
 <use href="src/img/icons.svg#icon-check"></use>
</svg>
<div class="recipe__quantity">${ ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
<div class="recipe__description">
 <span class="recipe__unit">${ing.unit}</span>
 ${ing.description}
</div>
</li>
`;
 }).join('')}
       </div>
    
    `;
/*recipeContainer.innerHTML ='';
recipeContainer.insertAdjacentHTML("afterbegin",markup);*/
}
_generateMarkupIngredient(ing){`
<li class="recipe__ingredient">
<svg class="recipe__icon">
 <use href="src/img/icons.svg#icon-check"></use>
</svg>
<div class="recipe__quantity">${ ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
<div class="recipe__description">
 <span class="recipe__unit">${ing.unit}</span>
 ${ing.description}
</div>
</li>
`
}}
export default  new  RecipeView() 
/*  lecture 288:
 in this lecture the guy is talking about the implementaion of the MVC architecture with the event handlers-----using publisher subscriber pattern
we were having this cod ein the controller:






*/