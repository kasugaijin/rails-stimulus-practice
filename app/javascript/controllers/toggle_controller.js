import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['hideable', 'first', 'second', 'check']

  toggle() {
    let cssClass = this.hideableTarget.classList;
    cssClass == 'hidden' ? cssClass.remove('hidden') : cssClass.add('hidden');
    };

  replace() {
    let first = this.firstTarget.classList;
    let second = this.secondTarget.classList;
    
    if (second == 'hidden') {
      first.add('hidden');
      second.remove('hidden');
    }
    else {
      first.remove('hidden')
      second.add('hidden')
    }
  }

  checkbox() {
    let cscClass = this.checkTarget.classList
    cscClass == '' ? cscClass.add('highlight') : cscClass.remove('highlight')
  }
  
}
