import * as model from './model.js';
import recipeView from './Views/recipeView';
//import recipeView from 'url:../../img/icons.svg'; 
// we want to jandle events in the controller 
// we have the publisher subscriber -- cod ethat knows when  to react as soon th  as the publsiher calls the subscribes calls 
// IN this he is talking about the ublisher subscriber pattern .. in which the control Recipes will be passed into AddHandlerRnder whe nprogram starts, the addhandler listens for events and uses controlRecipes as a  callback....

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');


////[]
const  controlRecipes = async function () {
    try {
 const id = window.location.hash.slice(1);
  if(!id)  return;
  //renderSpinner(recipeContainer);
  recipeView.renderSpinner();
   await model.loadRecipe(id);
 recipeView.render(model.state.recipe);
}catch(err) {
    console.log(err);
}};
const init =function() {
recipeView.AddHnadlerREnder(controlRecipes);



}
init();

// what happens in the Publisher subscriber thing: whenever th eprograms starts we will have the init() called. THe init in turn calls the addhandlerRender function next.... the letter is listening for events in the rceipeview.. in the controller we see that the function that is called is the addHandlerRender in which we pass the controllrecipes 
/*['hashchange','load'].forEach( elm => 
    window.addEventListener(elm,controlRecipes)
    he said  hes does not want the above cod eto be in the controller and also hes does not want go else where coz it needs the controlREcipes function which is in the controller ....  you might think that why cant we call the controlRecipes from the view but this is not possible since it doe snot know any thing abou the controller... here comes the se of the publisher subscriber method.. in this method we have a publisher 
    which is basically a code 
    that knows when  to react i.e (addHandlerRender()). on the other hand we have a subscriber which I code that wants to react (here it is the controRecipes)... we do this by subscribing to the publisher by  passing in th esubscriber function( i.e init)... as soon as the program loads we get the init() running  and it immediatelly calls the addHandlerRender() function that was--- this is possible coz the controller does import bothe recipeview and the model.. as we calla ddHandler Render() we pass in the control Recipes as the argument 
    ... what he did next is that he just took the code  that was supposed to  call the controlRecipes to teh recipeview and then he he made a public function ,,,, afterthat he craeted another fucntion in the controller called the init function  this is the function we were  talkking about above .. fro mhere called the caddhandlerRender and passed init the controlREcipes as the argument 
    
    );*/



/// Here starts the recipeView
import  icons from 'url:../../img/icons.svg'; 



import {Fraction} from 'fractional';
console.log(Fraction);
class RecipeView {
  #parentElement = document.querySelector('.recipe');
  #data;
render(data) {
  this.#data =data;
  const markup = this.#generateMarkup();
  this.#clear();
  this.#parentElement.insertAdjacentHTML('afterbegin',markup);}
#clear() {
this.#parentElement.innerHTML ='';
}
renderSpinner = function() {
    const markup = `
    <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> 
    `;
    this.#parentElement.innerHTML ='';
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
};
//the below is not  a public function 
AddHnadlerRender(handler) {

['hashchange','load'].forEach( elm => 
  window.addEventListener(elm,handler)
  
  );}
#generateMarkup(){
return`
   <figure class="recipe__fig">
      <img src="${this.#data.image}" alt="${this.#data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this.#data.title}</span>
      </h1>
    </figure>
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this.#data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this.#data.servings}</span>
        <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      <div class="recipe__user-generated">
        <svg>
          <use href="icons#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="icons#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      
      ${this.#data.ingredients.map(ing => {
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
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this.#data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this.#data.url}" >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="src/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
/*recipeContainer.innerHTML ='';
recipeContainer.insertAdjacentHTML("afterbegin",markup);*/
}
#generateMarkupIngredient(ing){`
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
/* helpers*/
/**
 * 
 * // we  will contain couple of funbrictins that we use over and over again 
import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js'; 

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };




export const getJSON =async function(url) {
    try {
    const fetchPro = fetch(url);
    // the below cod creates a   race between the fetPro and timout fucntions ... it means that  whcih  evr comes first will be excuted ... this is like a time limit for the page....


    // the number 10 below is  perfect candidta efor the config
    const res = await Promise.race([fetchPro, timeout (10)]);
    //const res =  await fetch(url);
   // const data =await res.json();
    
    const data = await res.json();
    if(!res.ok) throw new Error (`${data.message} (${res.status})`);
return data;


}catch(err) {
 throw err;
        }
};
 * 
 * 
 * 
 * 
 * 
 * 
 */