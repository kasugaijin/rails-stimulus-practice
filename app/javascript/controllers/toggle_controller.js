import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['hideable']

  toggle() {
    this.hideableTarget.classList.add('hidden')
    };
  
}
