import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="checkbox-select-all"
export default class extends Controller {
  static targets = ["parent", "child"]
  connect() {
    this.parentTarget.checked = false
    this.childTargets.map(x => x.checked = false)
  }

  toggleChildren() {
    if (this.parentTarget.checked) {
      this.childTargets.map(x => x.checked = true)
    } else {
      this.childTargets.map(x => x.checked = false)
    }
  }

  toggleParent() {
    if (this.childTargets.map(x => x.checked).includes(false)) {
      this.parentTarget.checked = false
    } else {
      this.parentTarget.checked = true
    }
    // this.childTargets.map(x => x.checked)
    // console.log(this.childTargets.map(x => x.checked).includes(false))
  }
}
