import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // parcel 2; url:

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for searched terms!';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
