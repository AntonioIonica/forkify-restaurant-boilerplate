import View from './View.js';

class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');

  _message = 'Recipe was uploaded';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super(); // since it's a child class, we need super so we can access this keyword in constructor
    // this keyword will point to the object, comeing from View parent class and pointing to current object
    this._addHandlerShowWindow(); // need to call it as page loads, no need for controller
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    // exporting it so we can bind to this, pointing to the overlay and window
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)]; // will give us an erray of entries, from this=form
      // fromEntries takes an array of entries and transform to an object
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() { }
}

export default new AddRecipeView();
