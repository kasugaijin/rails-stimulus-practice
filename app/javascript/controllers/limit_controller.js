import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['input', 'output']

  limit() {
    let output = this.outputTarget
    let counter = 50 - this.inputTarget.value.length;
    output.innerText = counter;

    counter <= 5 ? output.style.cssText='color: red;' : output.style.cssText='color:blue;'
  }

}