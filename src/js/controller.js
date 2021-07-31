import * as model from './model.js';
import recipeView from './Views/recipeView.js';
import 'core-js/stable';
import { async } from 'regenerator-runtime';
import { MODAL_CLOSE_SEC } from './config.js';
import 'regenerator-runtime/runtime';

import searchView from './Views/searchView.js';
import resultsView from './Views/resultsView.js';

import paginationView from './Views/paginationView.js';
import bookmarksView from './Views/bookmarksView.js';
 //import addRecipeView from './Views/addRecipeView.js';
const recipeContainer = document.querySelector('.recipe');

const  controlRecipes = async function () {
    try {
 const id = window.location.hash.slice(1);
  if(!id)  return;
 
  recipeView.renderSpinner();
  // Result view to mark the  / selected serach result 
  resultsView.update(model.getSearchResultsPage());

  

//resultsView.update(model.getSearchResultsPage());
  // loading  recipe
   await model.loadRecipe(id);

 recipeView.render(model.state.recipe);
 // updating the bookmarks view

 bookmarksView.update(model.state.bookmarks);
 //controlServings();
}catch(err) {
  
    recipeView.renderError();
    console.error(err);
}



};
console.log('weeeeeelcome!');

const controlSearchResults =  async  function() {
    try {

        resultsView.renderSpinner();
        
        // 1) get  the serach  query 
        const query = searchView.getQuery();
        if(!query) return;

        // load search  results
    await model.loadSearchResults(query);

    // REnder the reults 
    
   
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    // Render initial Pagination buttons
paginationView.render(model.state.search);
   
    } catch(err) {
    
       // console.log(err);
}};

const controlPagination =function(goToPage) {

       // 1. Render the new reults 
       resultsView.render(model.getSearchResultsPage(goToPage));


       
paginationView.render(model.state.search);
};
const controlServings = function(newServings) {
// update the recipe srvings (in state)
model.updateServings(newServings);
// update the recipe View


//recipeView.render(model.state.recipe);
recipeView.update(model.state.recipe);
};
const controlAddBookmark = function() {
//1) add or remove a bookmark
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
    else model.deleteBookmark(model.state.recipe.id);
   
    
    // 2) update recipeView
    recipeView.update(model.state.recipe);
// 3) REnder boookmarks
bookmarksView.render(model.state.bookmarks);};

const controlBookmarks = function() {

    bookmarksView.render(model.state.bookmarks)
 };

/*const controlAddRecipe =  async function(newRecipe) {
try {

  console.log(newRecipe);
  // Upload the new Recipe data
 //await  model.uploadRecipe(newRecipe);
 await model.uploadRecipe(newRecipe);

}
catch(err) {

    console.log("&&&",err);
    addRecipeView.renderError(err.message)
}




};*/


const  init = function () {
bookmarksView.addHandlerRender(controlBookmarks);
recipeView.addHandlerRender(controlRecipes);
recipeView.addHandlerUpdateServings(controlServings);
recipeView.addHandlerAddBookmark(controlAddBookmark);
searchView.addHandlerSearch(controlSearchResults);
paginationView.addHandlerClick(controlPagination);

//addRecipeView.addHandlerUpload(controlAddRecipe);


};

 
init();
// we want to get the query from th einut field 



