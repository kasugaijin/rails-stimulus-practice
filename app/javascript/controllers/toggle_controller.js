import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['hideable']

  toggle() {
    let cssClass = this.hideableTarget.classList
    cssClass == 'hidden' ? cssClass.remove('hidden') : cssClass.add('hidden');
    };
  
}
