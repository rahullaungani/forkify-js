import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(recipe => previewView.render(recipe, false))
      .join(' ');
  }
}

export default new ResultsView();
