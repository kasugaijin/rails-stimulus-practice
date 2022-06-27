import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['hideable']

  toggle() {
    if (this.hideableTarget.classList == 'hidden')
      this.hideableTarget.classList.remove('hidden');
    else
      (this.hideableTarget.classList.add('hidden'));
    };
  
}
