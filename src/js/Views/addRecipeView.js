/*import  icons from 'url:../../img/icons.svg'; 
import View from './View.js';





class AddRecipeView extends View {
_parentElement = document.querySelector('.upload');

_window =document.querySelector('.add-recipe-window');

_overlay=document.querySelector('.overlay');
_btnOpen =document.querySelector('.nav__btn--add-recipe');
_btnClose =document.querySelector('.btn--close-modal');

constructor() {
super();
this._addHandlerShowWindow();

this._addHandlerHideWindow();

}
// the issue of closing  and adding the add recipe window is actually very unclear  I know he is listerning to click on  the cross but  how that is heppening is just not cleaer 

toggleWindow() {
this._overlay.classList.toggle('hidden');
this._window.classList.toggle('hidden');
    
}



_addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));

}
_addHandlerHideWindow(){
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click',this.toggleWindow(this));


}
addHandlerUpload(handler) {
this._parentElement.addEventListener('submit', function(e){
e.preventDefault();

const dataArr = [...new FormData(this)];
// the below function takes an array of enrtries and changes them to an object
 const data = Object.fromEntries(dataArr);
 handler(data);
});
// new concept 
}
_generateMarkup() {}

}


 
 
 
export default new AddRecipeView();*/