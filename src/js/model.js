
import {async} from 'regenerator-runtime';

//import API_URL from './config.js';
import { API_URL, RES_PER_PAGE,KEY} from './config.js';

//import {API_URL} from './config.js';
import {getJSON, sendJSON} from './helpers'

 export const state  = {


    recipe:{},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE,
    },
    bookmarks: [],
 };

export const loadRecipe = async function(id) {
    try {
        const res = await fetch(`${API_URL}${id}`) ;
        const  data = await getJSON(`${API_URL}${id}`);
  

const  { recipe }  = data.data;
state.recipe = {
   id: recipe.id,
   title: recipe.title,
   publisher: recipe.publisher,
   sourceUrl: recipe.source_url,
   image: recipe.image_url,
   servings: recipe.servings,
   cookingTime: recipe.cooking_time,
   ingredients:recipe.ingredients,

};
// th ebelow method will loop through an array and return true if any of them has the property we specified 

// if  i just comment on what he just did here I think he  put all the bookmarked recipes in one array and then  loops through all of them to see if  the one clicked has once been in the bookmarks array , if so he calls the bookmark function which keeps the bookmark fill marked.
if(state.bookmarks.some(bookmark => bookmark.id===id))
state.recipe.bookmarked =true;
else state.recipe.bookmarked =false;
console.log(state.recipe);
} catch (err) {
    console.error(`${err} ****`);
    throw err;
}};

// He is now trying to implement the search functionality 

export const loadSearchResults  =async function (query) {

try {

const data = await getJSON(`${API_URL}?search=${query}`);
console.log(data);

state.search.results = data.data.recipes.map(rec => {

return  {
    id: rec.id,
    title: rec.title,
    publisher: rec.publisher,
    image: rec.image_url,
    };


});
state.search.page =1;
console.log(state.search.results)
} catch(err) {
console.error(`${err} ***`);
throw err;
}

};




export const getSearchResultsPage =function (page =state.search.page) {
state.search.page =page;
const start  =(page -1)*state.search.resultsPerPage; //0

const end = page*state.search.resultsPerPage;//9



    return state.search.results.slice(start,end);
};
export const updateServings =function(newServings) {
    state.recipe.ingredients.forEach( ing =>{


        ing.quantity = (ing.quantity *newServings) /state.recipe.servings;
        //newQt = oldqt + newservings/ oldservings// 2*8/4  =4 
    });

    state.recipe.servings =newServings;
};

 const persistBookmarks = function()  {
localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));

 };
 



export const addBookmark  = function(recipe) {
// add bookmark 
state.bookmarks.push(recipe);
// mark the current recipe as bookmarked 

if(recipe.id === state.recipe.id) state.recipe.bookmarked =true;
persistBookmarks();
};


export const deleteBookmark = function(id) {
    // the beLOW method deletes
    const index =state.bookmarks.findIndex(el => el.id ===id);
state.bookmarks.splice(index,1)
// mark the current recipe as NOT bookmark
if(id === state.recipe.id) state.recipe.bookmarked =false;
persistBookmarks();
};

const init = function() {

const storage =localStorage.getItem('bookmarks');
if(storage) state.bookmarks =JSON.parse(storage);
};
init();
console.log(state.bookmarks);
const clearBookmarks = function() {
localStorage.clear('bookmarks');

};
//clearBookmarks();
/*export const uploadRecipe = async  function(newRecipe) {
    try {
const ingredients  = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing  => {

const ingArr =ing[1].replaceAll('','').split('.');
if(ingArr.length !== 3)
throw new Error(
  'wronng ingredient format try again'
);


const [quantitym, unit,description] =ingArr;


return {quantity: quantity? +quantiy:null, unit, description};


});

const  recipe ={
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients,
    };
   


//const data  = await sendJSON(`${API_URL}?key={key}`,recipe);
console.log(data);


}
catch(err) {
    throw err;
}


};



































/*
export const uploadRecipe = async function(newRecipe){ 
// heere it is a bit  hard to  follow along but what he is doing is that he is uploading th erecipe 
try {


const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !=='').map(ing => {
const ingArr =ing[1].split(',');
if(ingArr.length !== 3)
throw new Eror (
 'Wrong format , plaese try again'
);

const [quantity, unit,description] = ingArr;
return{quantity: quantity? +quantity:null, unit, description};});
const recipe = {
    title: newRecipe.title,
    source_url:newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time:+newRecipe.cooking_Time,
    servings:+newRecipe.servings,
    ingredients,
    
    
    };
    



const data = await sendJSON(`${API_URL}?key=${KEY}`,recipe);

console.log(data)


} catch(err) {

    throw err;
}

};*/