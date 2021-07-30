import View from './View.js';
import  icons from 'url:../../img/icons.svg'; 

import previewView from './previewView.js';

class ResultsView extends View {
_parentElement = document.querySelector('.results');
_errorMessage=" we could not find that recipe, pleas etry another one!";
  _message ='';
    
  _generateMarkup() {
    
    return  this._data.map(result =>
         previewView.render(result,false) ).join('');
    
}




}

export  default  new ResultsView();
// it is  very important you  anlyse and undetsnad how the data follows  between theese modules and classes it is really importnat ---- you did not understand much but was just following a long