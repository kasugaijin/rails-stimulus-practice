import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['input', 'output']

  limit() {
    let counter = this.inputTarget.value.length;
    console.log(counter)
    this.outputTarget.innerText = counter;
  }

}